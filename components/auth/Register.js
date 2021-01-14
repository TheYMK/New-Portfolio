import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../actions/firebase';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { REGISTER_REDIRECT_URL } from '../../config';

const Register = () => {
	const [ values, setValues ] = useState({
		email: '',
		loading: false
	});

	const { user } = useSelector((state) => ({ ...state }));
	const { email, loading } = values;

	useEffect(
		() => {
			if (user && user.token) {
				Router.push('/');
			}
		},
		[ user ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });

		try {
			const config = {
				url: REGISTER_REDIRECT_URL,
				handleCodeInApp: true
			};

			await auth.sendSignInLinkToEmail(email, config);
			toast.success(`Email is sent to ${email}. Click the link to complete your registration`);

			// save user email in local storage
			window.localStorage.setItem('emailForRegistration', email);

			setValues({ ...values, email: '', loading: false });
		} catch (err) {
			console.log(err);
			toast.error(err.message);
		}
	};

	const registerForm = () => (
		<form>
			<div className="form-group">
				<input
					type="email"
					className="form-control"
					value={email}
					onChange={(e) => setValues({ ...values, email: e.target.value, loading: false })}
					placeholder="Enter an email..."
					autoFocus
				/>
			</div>

			<Button onClick={handleSubmit} type="danger" shape="round" block size="large" loading={loading}>
				Register
			</Button>
		</form>
	);

	return (
		<React.Fragment>
			<div className="container p-5">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<h4>Creating an account will allow you to:</h4>
						<ul>
							<li>Track the progress of your project</li>
							<li>View project timeline</li>
							<li>Share your project resources with me easily</li>
							<li>Live chat with me</li>
							<li>Comment blogs</li>
							<li>And access to many other features...</li>
						</ul>
						{registerForm()}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Register;
