import React, { useState } from 'react';
import { getSingleProject, updateProject } from '../../../actions/project';
import Admin from '../../../components/auth/Admin';
import Layout from '../../../components/Layout';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import FileUpload from '../../../components/dashboard/FileUpload';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router';

const ProjectUpdatePage = ({ project }) => {
	const [ values, setValues ] = useState({
		name: project.name,
		category: project.category,
		description: project.description,
		images: project.images,
		client: project.client,
		url: project.url,
		date: project.date
	});
	const [ categories, setCategories ] = useState([ 'Web', 'Mobile', 'Design' ]);
	const [ loading, setLoading ] = useState(false);

	const { name, category, description, images, client, url, date } = values;

	const { user } = useSelector((state) => ({ ...state }));

	const handleUpdate = (e) => {
		e.preventDefault();
		setLoading(true);
		if (user && user.token) {
			updateProject(project.slug, values, user.token)
				.then((res) => {
					setLoading(false);
					toast.success('Project updated successfully');
					Router.push('/admin/dashboard');
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					// if (err.response.status === 400) toast.error(err.response.data);
					toast.error(err.response.data.error);
				});
		} else {
			setLoading(false);
			return;
		}
	};

	const showForm = () => (
		<form>
			<div className="form-row">
				<div className="form-group col-md-12">
					<label htmlFor="name">Project Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter a name..."
						value={name}
						onChange={(e) => setValues({ ...values, name: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="client">Client</label>
					<input
						type="text"
						className="form-control"
						id="client"
						placeholder="Enter a client name..."
						value={client}
						onChange={(e) => setValues({ ...values, client: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="url">Project URL</label>
					<input
						type="text"
						className="form-control"
						id="url"
						placeholder="Provide an url..."
						value={url}
						onChange={(e) => setValues({ ...values, url: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						className="form-control"
						id="date"
						value={date}
						onChange={(e) => setValues({ ...values, date: e.target.value })}
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="category" className="form-label">
						Project Category
					</label>
					<select
						name="category"
						id="category"
						className="form-control"
						required
						value={category}
						onChange={(e) => setValues({ ...values, category: e.target.value })}
					>
						<option value="">Please choose a category</option>
						{categories.map((c, i) => (
							<option key={i} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>
				<div className="form-group col-md-12">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea
						className="form-control"
						id="description"
						rows="3"
						value={description}
						onChange={(e) => setValues({ ...values, description: e.target.value })}
					/>
				</div>
			</div>
			<a className="project-btn" onClick={(e) => handleUpdate(e)}>
				{loading ? 'Processing...' : 'Update'}
			</a>
		</form>
	);

	return (
		<Layout headerStyle="" headerActiveLink="">
			<Admin>
				<main id="main">
					<Breadcrumbs pageTitle="Project Update" />
					<section className="inner-page">
						<div className="container">
							<div className="p-3">
								<FileUpload
									values={values}
									setValues={setValues}
									setLoading={setLoading}
									loading={loading}
								/>
							</div>
							{showForm()}
						</div>
					</section>
				</main>
			</Admin>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleProject(params.slug).then((res) => {
		return {
			props: {
				project: res.data,
				params
			}
		};
	});
}

export default ProjectUpdatePage;
