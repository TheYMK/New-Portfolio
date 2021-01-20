import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createCategory, getCategories, removeCategory } from '../../actions/category';

const Category = () => {
	const [ values, setValues ] = useState({
		name: '',
		error: false,
		success: false,
		categories: [],
		removed: false,
		reload: false
	});

	const { name, error, success, categories, removed, reload } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			loadCategories();
		},
		[ reload ]
	);

	const loadCategories = () => {
		getCategories()
			.then((res) => {
				setValues({ ...values, categories: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createCategory({ name: name }, user.token).then((res) => {
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

	const newCategoryForm = () => (
		<form className="">
			<div className="form-group">
				<label className="text-muted">Category Name</label>
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
		let answer = window.confirm('Are you sure you want to delete this category?');

		if (answer) {
			deleteCategory(slug);
		}
	};

	const deleteCategory = (slug) => {
		removeCategory(slug, user.token).then((res) => {
			if (res.data.error) {
				console.log(res.data.error);
			} else {
				setValues({ ...values, error: false, success: false, name: '', removed: true, reload: !reload });
			}
		});
	};

	const showCategories = () => {
		return categories.map((category, index) => {
			return (
				<button
					onDoubleClick={() => deleteConfirm(category.slug)}
					title="Double click to delete"
					key={index}
					className="btn btn-outline-info mr-1 ml-1 mt-3"
				>
					{category.name}
				</button>
			);
		});
	};

	const showSuccess = () => {
		if (success) {
			return <p className="text-success">Category is created</p>;
		}
	};

	const showError = () => {
		if (error) {
			return <p className="text-danger">Category already exist</p>;
		}
	};

	const showRemoved = () => {
		if (removed) {
			return <p className="text-danger">Category is removed</p>;
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
				{newCategoryForm()}
				{showCategories()}
			</div>
		</div>
	);
};

export default Category;
