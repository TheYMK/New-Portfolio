import React from 'react';
import Link from 'next/link';

const Header = ({ headerStyle, headerActiveLink }) => {
	return (
		<header id="header" className={`fixed-top d-flex align-items-center ${headerStyle}`}>
			<div className="container d-flex align-items-center">
				<div className="logo mr-auto">
					<h1 className="text-light">
						<Link href="/">
							<a>Kaym.js</a>
						</Link>
					</h1>
				</div>

				<nav className="nav-menu d-none d-lg-block">
					<ul>
						<li className="active">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							<a href="#blog">Blog</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a href="/auth/login">Login</a>
						</li>
						<li className={headerActiveLink === 'register' ? 'active' : ''}>
							<Link href="/auth/register">
								<a>Register</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
