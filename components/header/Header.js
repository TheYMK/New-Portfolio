import React, { useState } from 'react';
import Link from 'next/link';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';

const Header = ({ headerStyle, headerActiveLink }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});
		toast.success("You've been logged out");
		Router.push('/');
	};

	return (
		<header id="header" className={`fixed-top d-flex align-items-center ${headerStyle}`}>
			<div className="container d-flex align-items-center">
				<div className="logo mr-auto">
					<h1 className="text-light">
						<a href="/">Kaym.js</a>
					</h1>
				</div>

				<nav className="nav-menu d-none d-lg-block">
					<ul>
						<li className="active">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#services">Services</a>
						</li>
						<li>
							<a href="/#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="/#pricing">Pricing</a>
						</li>
						<li>
							<a href="/#blog">Blog</a>
						</li>
						<li>
							<a href="/#faq">FAQ</a>
						</li>
						<li>
							<a href="/#contact">Contact</a>
						</li>
						{!user && (
							<li>
								<Link href="/auth/login">
									<a>Login</a>
								</Link>
							</li>
						)}

						{!user && (
							<li className={headerActiveLink === 'register' ? 'active' : ''}>
								<Link href="/auth/register">
									<a>Register</a>
								</Link>
							</li>
						)}

						{user && (
							<li className="drop-down">
								<Link href="/#">
									<a>{user.email && user.email.split('@')[0]}</a>
								</Link>

								<ul>
									{user &&
									user.role === 'subscriber' && (
										<li>
											<Link href="/user/dashboard">
												<a>Dashboard</a>
											</Link>
										</li>
									)}

									{user &&
									user.role === 'admin' && (
										<li>
											<Link href="/admin/dashboard">
												<a>Admin Dashboard</a>
											</Link>
										</li>
									)}

									<li>
										<Link href="">
											<a onClick={logout}>Logout</a>
										</Link>
									</li>
								</ul>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
