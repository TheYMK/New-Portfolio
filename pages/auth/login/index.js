import React from 'react';
import Login from '../../../components/auth/Login';
import Layout from '../../../components/Layout';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

const LoginPage = () => {
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="login">
				<main id="main">
					<Breadcrumbs pageTitle="Login" />
					<section className="inner-page">
						<div className="container">
							<Login />
						</div>
					</section>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export default LoginPage;
