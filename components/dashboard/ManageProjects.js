import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createProject, getProjects, removeProject } from '../../actions/project';
import { toast } from 'react-toastify';
import ProjectCreateModal from '../modal/ProjectCreateModal';
import { useSelector } from 'react-redux';

const ManageProjects = () => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));
	const [ projects, setProjects ] = useState([]);
	const [ reload, setReload ] = useState(false);

	const [ values, setValues ] = useState({
		name: '',
		category: '',
		description: '',
		images: [],
		client: '',
		url: '',
		date: '',
		categories: [ 'Web', 'Mobile', 'Design' ]
	});

	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			fetchProjects();
		},
		[ reload ]
	);

	const fetchProjects = () => {
		getProjects()
			.then((res) => {
				setProjects(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(`Failed to fetch all projects`);
			});
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = (v) => {
		setLoading(true);
		createProject(values, user.token)
			.then((res) => {
				setLoading(false);
				toast.success('New project added successfully');
				setValues({
					...values,
					name: '',
					category: '',
					description: '',
					images: [],
					client: '',
					url: '',
					date: ''
				});
				setIsModalVisible(false);
				setReload(!reload);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error(err.response.data.error);
			});
	};

	const handleCancel = () => {
		setValues({
			...values,
			name: '',
			category: '',
			description: '',
			images: [],
			client: '',
			url: '',
			date: ''
		});
		setIsModalVisible(false);
	};

	const handleRemove = (slug) => {
		let answer = window.confirm('Are you sure to remove this project?');
		setValues({ ...values, loading: true });
		if (answer) {
			removeProject(slug, user.token)
				.then((res) => {
					setValues({ ...values, loading: false });
					toast.success(`Project deleted successfully`);
					fetchProjects();
				})
				.catch((err) => {
					console.log(err);
					setValues({ ...values, loading: false });
					if (err.response.status === 400) {
						toast.error(err.response.data.error);
					}
				});
		}
	};

	const showProjects = () => (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Category</th>
					<th scope="col">URL</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{projects.map((p, i) => (
					<tr key={p._id}>
						<th scope="row">{i + 1}</th>

						<td>{p.name}</td>
						<td>{p.category}</td>
						<td>{p.url}</td>
						<td>
							<button className="badge bg-danger btn" onClick={(e) => handleRemove(p.slug)}>
								Delete
							</button>
							<br />
							<Link href={`/admin/project/${p.slug}`}>
								<a className="badge bg-warning btn">Update</a>
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	return (
		<div>
			<div className="container text-center my-4">
				<a className="project-btn" onClick={() => setIsModalVisible(true)}>
					New project
				</a>
			</div>

			{showProjects()}

			<ProjectCreateModal
				loading={loading}
				setLoading={setLoading}
				isModalVisible={isModalVisible}
				handleCancel={handleCancel}
				handleOk={handleOk}
				values={values}
				setValues={setValues}
			/>
		</div>
	);
};

export default ManageProjects;
