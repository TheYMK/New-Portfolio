import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Category from './Category';
import Tag from './Tag';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router'; // so we have access to router props (so that we can maybe grap router parameters)
import { useSelector } from 'react-redux';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog, getBlogs, removeBlog } from '../../actions/blog';
import BlogCreateModal from '../modal/BlogCreateModal';
import { toast } from 'react-toastify';

const ManageBlogs = ({ router }) => {
	// Grab the blog from the local storage
	const getBlogFromLS = () => {
		if (typeof window === 'undefined') {
			return false;
		}

		if (localStorage.getItem('blog')) {
			return JSON.parse(localStorage.getItem('blog'));
		} else {
			return false;
		}
	};

	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const [ categories, setCategories ] = useState([]);
	const [ tags, setTags ] = useState([]);
	const [ checkedCategories, setCheckedCategories ] = useState([]);
	const [ checkedTags, setCheckedTags ] = useState([]);
	const [ body, setBody ] = useState(getBlogFromLS());
	const [ reload, setReload ] = useState(false);
	const [ blogs, setBlogs ] = useState([]);
	const [ values, setValues ] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		images: [],
		title: ''
	});
	const [ loading, setLoading ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			setValues({ ...values, formData: new FormData() });
			// console.log(values.formData);
			fetchBlogs();
			initCategories();
			initTags();
		},
		[ router, reload ]
	);

	const fetchBlogs = () => {
		getBlogs()
			.then((res) => {
				setBlogs(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	const initCategories = () => {
		getCategories()
			.then((res) => {
				if (res.data.error) {
					setValues({ ...values, error: res.data.error });
				} else {
					setCategories(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
				setValues({ ...values, error: err.message });
				toast.error(err);
			});
	};

	const initTags = () => {
		getTags()
			.then((res) => {
				if (res.data.error) {
					setValues({ ...values, error: res.data.error });
				} else {
					setTags(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
				setValues({ ...values, error: err.message });
				toast.error(err);
			});
	};

	const deleteBlog = (slug) => {
		removeBlog(slug, user.token)
			.then((res) => {
				toast.success('Blog deleted successfully');
				setReload(!reload);
			})
			.catch((err) => {
				console.log(err);
				toast.error(err);
			});
	};

	const showBlogs = () => (
		<div className="table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Categories</th>
						<th scope="col">Tags</th>
						<th scope="col">Published On</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{blogs.map((b, i) => (
						<tr key={i}>
							<th scope="row">{i + 1}</th>
							<td>{b.title}</td>
							<td>
								{b.categories.map((c, j) => (
									<div className="badge bg-info mr-2" key={j}>
										{c.name}
									</div>
								))}
							</td>
							<td>
								{b.tags.map((t, j) => (
									<div className="badge bg-success mr-2" key={j}>
										{t.name}
									</div>
								))}
							</td>
							<td>{new Date(b.createdAt).toLocaleDateString('en-US')}</td>
							<td>
								<button className="badge bg-danger btn" onClick={() => deleteBlog(b.slug)}>
									Delete
								</button>
								<br />
								<Link href={`/admin/blog/${b.slug}`}>
									<a className="badge bg-warning btn">Update</a>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = (f, i) => {
		// append images to formdata before sending
		// formData.set(images, i);
		setLoading(true);

		if (!i) {
			setValues({ ...values, error: 'You need to upload at least one image' });
			return;
		}
		f.set('image', i[0].url);

		// console.log([ ...f ]);

		createBlog(f, user.token)
			.then((res) => {
				if (res.data.error) {
					setValues({ ...values, error: res.data.error });
					setLoading(false);
				} else {
					setValues({
						...values,
						title: '',
						error: '',
						images: [],
						success: `A new blog is created: ${res.data.title}`
					});

					toast.success('A new blog was created');
					setBody('');
					setCategories([]);
					setTags([]);
					setIsModalVisible(false);
					setLoading(false);
					setReload(!reload);
				}
			})
			.catch((err) => {
				console.log(err);
				setValues({ ...values, error: err.message });
				toast.error(err);
				setLoading(false);
			});
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<div className="container text-center my-4">
				<a className="project-btn" onClick={showModal}>
					New Blog
				</a>
			</div>

			<div className="container mb-5">
				<div className="row">
					<div className="col-md-12">
						<h2>Manage Categories and Tags</h2>
					</div>
					<div className="col-md-6 mt-4">
						<Category />
					</div>
					<div className="col-md-6 mt-4">
						<Tag />
					</div>
				</div>
			</div>

			{showBlogs()}

			<BlogCreateModal
				loading={loading}
				setLoading={setLoading}
				isModalVisible={isModalVisible}
				handleCancel={handleCancel}
				handleOk={handleOk}
				values={values}
				setValues={setValues}
				body={body}
				setBody={setBody}
				checkedCategories={checkedCategories}
				setCheckedCategories={setCheckedCategories}
				checkedTags={checkedTags}
				setCheckedTags={setCheckedTags}
				categories={categories}
				tags={tags}
			/>
		</div>
	);
};

export default withRouter(ManageBlogs);
