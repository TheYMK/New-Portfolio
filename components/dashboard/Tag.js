import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createTag, getTags, removeTag } from '../../actions/tag';

const Category = () => {
	const [ values, setValues ] = useState({
		name: '',
		error: false,
		success: false,
		tags: [],
		removed: false,
		reload: false
	});

	const { name, error, success, tags, removed, reload } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			loadTags();
		},
		[ reload ]
	);

	const loadTags = () => {
		getTags()
			.then((res) => {
				setValues({ ...values, tags: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createTag({ name: name }, user.token).then((res) => {
			if (res.data.error) {
				setValues({ ...values, error: res.data.error, success: false });
			} else {
				setValues({ ...values, error: false, success: true, name: '', removed: false, reload: !reload });
			}
		});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
	};

	const newTagForm = () => (
		<form className="">
			<div className="form-group">
				<label className="text-muted">Tag Name</label>
				<input type="text" className="form-control" onChange={handleChange} value={name} required />
			</div>
			<div>
				<a className="project-btn" onClick={handleSubmit}>
					Create
				</a>
			</div>
		</form>
	);

	const deleteConfirm = (slug) => {
		let answer = window.confirm('Are you sure you want to delete this tag?');

		if (answer) {
			deleteTag(slug);
		}
	};

	const deleteTag = (slug) => {
		removeTag(slug, user.token).then((res) => {
			if (res.data.error) {
				console.log(res.data.error);
			} else {
				setValues({ ...values, error: false, success: false, name: '', removed: true, reload: !reload });
			}
		});
	};

	const showTags = () => {
		return tags.map((tag, index) => {
			return (
				<button
					onDoubleClick={() => deleteConfirm(tag.slug)}
					title="Double click to delete"
					key={index}
					className="btn btn-outline-success mr-1 ml-1 mt-3"
				>
					{tag.name}
				</button>
			);
		});
	};

	const showSuccess = () => {
		if (success) {
			return <p className="text-success">Tag is created</p>;
		}
	};

	const showError = () => {
		if (error) {
			return <p className="text-danger">Tag already exist</p>;
		}
	};

	const showRemoved = () => {
		if (removed) {
			return <p className="text-danger">Tag is removed</p>;
		}
	};

	const mouseMoveHandler = (e) => {
		setValues({ ...values, error: false, success: false, removed: '' });
	};

	return (
		<div>
			{showSuccess()}
			{showError()}
			{showRemoved()}

			<div onMouseMove={mouseMoveHandler}>
				{newTagForm()}
				{showTags()}
			</div>
		</div>
	);
};

export default Category;
