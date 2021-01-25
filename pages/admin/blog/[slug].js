import React, { useState, useEffect } from 'react';
import Admin from '../../../components/auth/Admin';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import FileUpload from '../../../components/dashboard/FileUpload';
import Layout from '../../../components/Layout';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../actions/category';
import { getTags } from '../../../actions/tag';
import { getSingleBlog, updateBlog } from '../../../actions/blog';
import { toast } from 'react-toastify';
import { QuillModules, QuillFormats } from '../../../helpers/quill';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { withRouter } from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogUpdatePage = ({ blog, router }) => {
	const [ body, setBody ] = useState('');
	const [ categories, setCategories ] = useState([]);
	const [ tags, setTags ] = useState([]);
	const [ checkedCategories, setCheckedCategories ] = useState([]);
	const [ checkedTags, setCheckedTags ] = useState([]);
	const [ values, setValues ] = useState({
		title: '',
		error: '',
		success: ''
		// formData: ''
	});
	const { title, error, success } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			// setValues({ ...values, formData: new FormData() });
			initBlog();
			initCategories();
			initTags();
		},
		[ router ]
	);

	const initBlog = () => {
		setValues({ ...values, title: blog.title });
		setBody(blog.body);
		setCategoriesArray(blog.categories);
		setTagsArray(blog.tags);
	};

	const setCategoriesArray = (blogCategories) => {
		let ca = [];
		blogCategories.map((c, i) => {
			ca.push(c._id);
		});
		setCheckedCategories(ca);
	};

	const setTagsArray = (blogTags) => {
		let ta = [];
		blogTags.map((t, i) => {
			ta.push(t._id);
		});
		setCheckedTags(ta);
	};

	const initCategories = () => {
		getCategories()
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				toast.error(err);
			});
	};

	const initTags = () => {
		getTags()
			.then((res) => {
				setTags(res.data);
			})
			.catch((err) => {
				toast.error(err);
			});
	};

	const handleToggle = (c) => () => {
		setValues({ ...values, error: '' });

		const clickedCategory = checkedCategories.indexOf(c);
		const all = [ ...checkedCategories ];

		if (clickedCategory === -1) {
			all.push(c);
		} else {
			all.splice(clickedCategory, 1);
		}

		setCheckedCategories(all);
		// formData.append('categories', all);
	};

	const handleTagsToggle = (t) => () => {
		setValues({ ...values, error: '' });

		const clickedTag = checkedTags.indexOf(t);
		const all = [ ...checkedTags ];

		if (clickedTag === -1) {
			all.push(t);
		} else {
			all.splice(clickedTag, 1);
		}

		setCheckedTags(all);
		// formData.append('tags', all);
	};

	const findOutCategory = (c) => {
		const result = checkedCategories.indexOf(c);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const findOutTag = (t) => {
		const result = checkedTags.indexOf(t);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const showTags = () => {
		return (
			tags &&
			tags.map((t, i) => (
				<li key={i} className="list-unstyled">
					<input
						onChange={handleTagsToggle(t._id)}
						checked={findOutTag(t._id)}
						type="checkbox"
						className="mr-2"
					/>
					<label className="form-check-label">{t.name}</label>
				</li>
			))
		);
	};

	const showCategories = () => {
		return (
			categories &&
			categories.map((c, i) => (
				<li key={i} className="list-unstyled">
					<input
						onChange={handleToggle(c._id)}
						checked={findOutCategory(c._id)}
						type="checkbox"
						className="mr-2"
					/>
					<label className="form-check-label">{c.name}</label>
				</li>
			))
		);
	};

	const updateBlogForm = () => {
		return (
			<form onSubmit={editBlog}>
				<div className="form-group">
					<label className="text-muted">Title</label>
					<input type="text" className="form-control" value={title} onChange={handleChange('title')} />
				</div>

				<div className="form-group">
					<ReactQuill
						modules={QuillModules}
						formats={QuillFormats}
						value={body}
						placeholder="Write something amazing..."
						onChange={handleBody}
					/>
				</div>

				<div>
					<button type="submit" className="btn btn-primary">
						Update
					</button>
				</div>
			</form>
		);
	};

	const handleChange = (name) => (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		// formData.append(name, value);
		setValues({ ...values, [name]: value, error: '' });
	};

	const handleBody = (e) => {
		setBody(e);
		// formData.append('body', e);
	};

	const editBlog = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.set('title', title);
		formData.set('categories', checkedCategories);
		formData.set('tags', checkedTags);
		formData.set('body', body);

		// console.log([ ...formData ]);

		updateBlog(blog.slug, formData, user.token).then((res) => {
			toast.success('Blog updated successfully');
			Router.push('/admin/dashboard');
		});
	};

	return (
		<Layout headerStyle="" headerActiveLink="">
			<Admin>
				<main id="main">
					<Breadcrumbs pageTitle="Blog Update" />
					<section className="inner-page">
						<div className="container">
							<div className="row">
								<div className="col-md-8">{updateBlogForm()}</div>
								<div className="col-md-4">
									<div>
										<h5>Categories</h5>
										<hr />

										<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
									</div>
									<div>
										<h5>Tags</h5>
										<hr />
										<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</Admin>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleBlog(params.slug).then((res) => {
		return {
			props: {
				blog: res.data,
				params
			}
		};
	});
}

export default withRouter(BlogUpdatePage);
