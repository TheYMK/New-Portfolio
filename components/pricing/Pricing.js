import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const Pricing = () => {
	const dispatch = useDispatch();
	const { user, order_type } = useSelector((state) => ({ ...state }));

	const handleBasicPlanClick = () => {
		localStorage.setItem('order_type', 'basic');

		dispatch({
			type: 'SET_ORDER_TYPE',
			payload: 'basic'
		});

		Router.push('/order/completion');
	};

	const handleStandardPlanClick = () => {
		localStorage.setItem('order_type', 'standard');

		dispatch({
			type: 'SET_ORDER_TYPE',
			payload: 'standard'
		});

		Router.push('/order/completion');
	};

	const handlePremiumPlanClick = () => {
		localStorage.setItem('order_type', 'premium');

		dispatch({
			type: 'SET_ORDER_TYPE',
			payload: 'premium'
		});

		Router.push('/order/completion');
	};

	const handleUltimatePlanClick = () => {
		localStorage.setItem('order_type', 'ultimate');

		dispatch({
			type: 'SET_ORDER_TYPE',
			payload: 'ultimate'
		});

		Router.push('/order/completion');
	};

	return (
		<section id="pricing" className="pricing">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Pricing</h2>
					<p>My Prices</p>
				</div>

				<div className="card text-center m-5 promotion_card">
					<div className="card-body">
						<i className="ri-alarm-warning-fill" /> Get 1 year free <span>HOSTING</span> +{' '}
						<span>DOMAIN NAME (.COM, .FR, .NET, etc...)</span> + <span>PRO EMAIL</span> +{' '}
						<span>SSL CERTIFICATE</span> on all packages
					</div>
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="box" data-aos="zoom-in">
							<h3>Basic</h3>
							<p>Suited for potfolio websites, or landing pages.</p>
							{/* <p style={{ color: '#f56a6a' }}>*Hosting fee not included*</p> */}

							<h4>
								&#8804; <sup>$</sup>360<span />
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities: 3 max</li>
								<li className="na">Google Analytics</li>
								<li>Newsletter</li>
								<li>Contact Forms</li>
								<li className="na">Admin Dashboard</li>
								<li className="na">Authentication</li>
								<li className="na">Database</li>
								<li className="na">PayPal Payment</li>
								<li className="na">Pro Email</li>
								<li>
									Domain Name: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									SSL Certificate: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									Hosting: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>Number of Pages: up to 5</li>
								<li>Revisions: up to 5</li>
								<li>Delivery Time: 5 to 7 days</li>
							</ul>
							<div className="btn-wrap">
								<a className="btn-buy" onClick={handleBasicPlanClick}>
									Select
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-4 mt-md-0">
						<div className="box featured" data-aos="zoom-in" data-aos-delay="100">
							<h3>Standard</h3>
							<p>Suited for small businesses or ecommerce.</p>
							{/* <p style={{ color: '#f56a6a' }}>*Hosting fee not included*</p> */}
							<h4>
								&#8804; <sup>$</sup>825
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities: 5 max</li>
								<li>Google Analytics</li>
								<li>Newsletter</li>
								<li>Contact Forms</li>
								<li className="">Admin Dashboard</li>
								<li className="">Authentication</li>
								<li className="">Database</li>
								<li className="">PayPal Payment</li>
								<li className="">
									Pro Email: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									Domain Name: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									SSL Certificate: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									Hosting: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>Number of Pages: up to 10</li>
								<li>Revisions: up to 10</li>
								<li>Delivery Time: 15 to 20 days</li>
							</ul>
							<div className="btn-wrap">
								<a className="btn-buy" onClick={handleStandardPlanClick}>
									Select
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
						<div className="box" data-aos="zoom-in" data-aos-delay="200">
							<h3>Premium</h3>
							<p>Suited for enterprises or corporations.</p>
							{/* <p style={{ color: '#f56a6a' }}>*Hosting fee not included*</p> */}
							<h4>
								&#8804; <sup>$</sup>2499
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities: 10 max</li>
								<li>Google Analytics</li>
								<li>Newsletter</li>
								<li>Contact Forms</li>
								<li className="">Admin Dashboard</li>
								<li className="">Authentication</li>
								<li className="">Database</li>
								<li className="">PayPal Payment</li>
								<li className="">
									Pro Email: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									Domain Name: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									SSL Certificate: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>
									Hosting: <strong style={{ color: '#f56a6a' }}>1 year free</strong>
								</li>
								<li>Number of Pages: up to 20</li>
								<li>Revisions: unlimited</li>
								<li>Delivery Time: 1 month or more</li>
							</ul>
							<div className="btn-wrap">
								<a className="btn-buy" onClick={handlePremiumPlanClick}>
									Select
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
						<div className="box" data-aos="zoom-in" data-aos-delay="300">
							<span className="advanced">Advanced</span>
							<h3>Custom</h3>
							<h4>
								<sup>$</sup>-
							</h4>
							<p>
								I also offer you a totally customized package, that you can select by your own. If you
								need to add some extra feature and acquire some other service (like logo design or
								business card design), then I provide flexibility with this option.
							</p>
							<div className="btn-wrap">
								<a className="btn-buy" onClick={handleUltimatePlanClick}>
									Select
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
