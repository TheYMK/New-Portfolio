import React from 'react';
import Register from '../../../components/auth/Register';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import Hero from '../../../components/hero/Hero';
import Layout from '../../../components/Layout';

const RegisterPage = () => {
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="register">
				<main id="main">
					<Breadcrumbs pageTitle="Register" />
					<section className="inner-page">
						<div className="container">
							<Register />
						</div>
					</section>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export default RegisterPage;
