import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import FileUpload from '../dashboard/FileUpload';

function ProjectCreateModal({ isModalVisible, handleOk, handleCancel, values, setValues, loading, setLoading }) {
	const {
		name,
		category,
		description_frontend,
		description_backend,
		description_challenges,
		images,
		client,
		url,
		date,
		categories
	} = values;

	return (
		<Modal
			title="New Project Details"
			visible={isModalVisible}
			onOk={() => handleOk(values)}
			onCancel={handleCancel}
			okText="Create"
			cancelText="Cancel"
		>
			<React.Fragment>
				<div className="p-3">
					<FileUpload values={values} setValues={setValues} setLoading={setLoading} loading={loading} />
				</div>
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
							<label htmlFor="description_frontend" className="form-label">
								Front-end Description
							</label>
							<textarea
								className="form-control"
								id="description_frontend"
								rows="3"
								value={description_frontend}
								onChange={(e) => setValues({ ...values, description_frontend: e.target.value })}
							/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="description_backend" className="form-label">
								Back-end Description
							</label>
							<textarea
								className="form-control"
								id="description_backend"
								rows="3"
								value={description_backend}
								onChange={(e) => setValues({ ...values, description_backend: e.target.value })}
							/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="description_challenges" className="form-label">
								Challenges Description
							</label>
							<textarea
								className="form-control"
								id="description_challenges"
								rows="3"
								value={description_challenges}
								onChange={(e) => setValues({ ...values, description_challenges: e.target.value })}
							/>
						</div>
					</div>
				</form>
			</React.Fragment>
		</Modal>
	);
}

export default ProjectCreateModal;
