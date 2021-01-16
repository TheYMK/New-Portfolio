import React from 'react';
import ManageAccounts from './ManageAccounts';
import ManageBlogs from './ManageBlogs';
import ManageOrders from './ManageOrders';
import ManageProjects from './ManageProjects';

const AdminDashboard = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">
									With supporting text below as a natural lead-in to additional content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">
									With supporting text below as a natural lead-in to additional content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">
									With supporting text below as a natural lead-in to additional content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="skills" className="skills">
				<div className="">
					<ul className="nav nav-tabs row d-flex">
						<li className="nav-item col-3" data-aos="zoom-in">
							<a className="nav-link active show" data-toggle="tab" href="#tab-1">
								<i className="ri-briefcase-4-fill" />
								<h4 className="d-none d-lg-block">Projects</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
							<a className="nav-link" data-toggle="tab" href="#tab-2">
								<i className="ri-file-text-fill" />
								<h4 className="d-none d-lg-block">Blogs</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
							<a className="nav-link" data-toggle="tab" href="#tab-3">
								<i className="ri-shopping-cart-fill" />
								<h4 className="d-none d-lg-block">Orders</h4>
							</a>
						</li>
						<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
							<a className="nav-link" data-toggle="tab" href="#tab-4">
								<i className="ri-account-circle-fill" />
								<h4 className="d-none d-lg-block">Accounts</h4>
							</a>
						</li>
					</ul>

					<div className="tab-content" data-aos="fade-up">
						<div className="tab-pane active show" id="tab-1">
							<ManageProjects />
						</div>
						<div className="tab-pane" id="tab-2">
							<ManageBlogs />
						</div>
						<div className="tab-pane" id="tab-3">
							<ManageOrders />
						</div>
						<div className="tab-pane" id="tab-4">
							<ManageAccounts />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminDashboard;
