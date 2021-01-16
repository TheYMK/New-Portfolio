import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import AdminDashboard from '../../components/dashboard/AdminDashboard';
import Admin from '../../components/auth/Admin';

const AdminDashboardPage = () => {
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="admindashboard">
				<Admin>
					<main id="main">
						<Breadcrumbs pageTitle="Admin Dashboard" />
						<section className="inner-page">
							<div className="container-fluid">
								<AdminDashboard />
							</div>
						</section>
					</main>
				</Admin>
			</Layout>
		</React.Fragment>
	);
};

export default AdminDashboardPage;
