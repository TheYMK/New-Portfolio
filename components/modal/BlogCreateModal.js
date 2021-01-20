import React from 'react';
import { Modal, Button } from 'antd';
import FileUpload from '../dashboard/FileUpload';
import dynamic from 'next/dynamic'; // because we're gonna use a rich text editor and we only want it to work with the client not the server
import { QuillModules, QuillFormats } from '../../helpers/quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogCreateModal = ({
	isModalVisible,
	handleOk,
	handleCancel,
	values,
	setValues,
	loading,
	setLoading,
	body,
	setBody,
	checkedCategories,
	setCheckedCategories,
	checkedTags,
	setCheckedTags,
	categories,
	tags
}) => {
	const { error, success, formData, images, title } = values;

	const handleChange = (name) => (e) => {
		// console.log(e.target.value);
		// const value = e.target.value;
		// because we will send form data we need the browser API called form data (also check on useEffect())

		formData.set(name, e.target.value);
		setValues({ ...values, [name]: e.target.value, formData: formData, error: '' });
	};

	const handleBody = (e) => {
		// console.log(e);
		setBody(e);
		formData.set('body', e);
		if (typeof window !== 'undefined') {
			localStorage.setItem('blog', JSON.stringify(e));
		}
	};

	const handleToggleCategories = (categoryID) => () => {
		setValues({ ...values, error: '' });

		// return the first index or -1
		const clickedCategory = checkedCategories.indexOf(categoryID);
		const allCategories = [ ...checkedCategories ];

		// if it didn't find the index in the state - we can push it into
		if (clickedCategory === -1) {
			allCategories.push(categoryID);
		} else {
			allCategories.splice(clickedCategory, 1);
		}

		// console.log(allCategories);
		setCheckedCategories(allCategories);
		formData.set('categories', allCategories);
	};

	const handleToggleTags = (tagID) => () => {
		setValues({ ...values, error: '' });

		const clickedTag = checkedTags.indexOf(tagID);
		const allTags = [ ...checkedTags ];

		if (clickedTag === -1) {
			allTags.push(tagID);
		} else {
			allTags.splice(clickedTag, 1);
		}
		setCheckedTags(allTags);
		formData.set('tags', allTags);
	};

	const showCategories = () => {
		return (
			categories &&
			categories.map((category, index) => (
				<li className="list-unstyled" key={index}>
					<input className="mr-2" type="checkbox" onChange={handleToggleCategories(category._id)} />
					<label className="form-check-label">{category.name}</label>
				</li>
			))
		);
	};

	const showTags = () => {
		return (
			tags &&
			tags.map((tag, index) => (
				<li className="list-unstyled" key={index}>
					<input className="mr-2" type="checkbox" onChange={handleToggleTags(tag._id)} />
					<label className="form-check-label">{tag.name}</label>
				</li>
			))
		);
	};

	const showError = () => {
		return (
			<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
				{error}
			</div>
		);
	};

	const showSuccess = () => {
		return (
			<div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
				{success}
			</div>
		);
	};

	const showLoading = () => {
		return (
			<div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
				Loading...
			</div>
		);
	};

	return (
		<Modal
			title="New Blog"
			visible={isModalVisible}
			onOk={() => handleOk(formData, images)}
			onCancel={handleCancel}
			okText="Create"
			cancelText="Cancel"
			width={800}
		>
			<React.Fragment>
				{showError()}
				{showSuccess()}
				{showLoading()}
				<div className="p-3">
					<FileUpload values={values} setValues={setValues} setLoading={setLoading} loading={loading} />
				</div>
				<div className="mt-3">
					<form>
						<div className="form-group">
							<label className="text-muted">Title</label>
							<input
								className="form-control"
								value={title}
								type="text"
								onChange={handleChange('title')}
							/>
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
					</form>
					<div>
						<h5>Categories</h5>
						<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>

						<hr />
					</div>
					<div>
						<h5>Tags</h5>
						<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>

						<hr />
					</div>
				</div>
			</React.Fragment>
		</Modal>
	);
};

export default BlogCreateModal;
