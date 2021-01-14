import React from 'react';

const Pricing = () => {
	return (
		<section id="pricing" className="pricing">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Pricing</h2>
					<p>My Prices</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="box" data-aos="zoom-in">
							<h3>Basic</h3>
							<p>Suited for personal websites, or landing pages.</p>
							<h4>
								<sup>$</sup>150<span />
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities</li>
								<li className="na">Authentication</li>
								<li className="na">Database</li>
								<li className="na">Payment method</li>
								<li className="na">Custom content upload</li>
								<li className="na">SEO</li>
								<li>Help for hosting</li>
								<li>Number of Pages: up to 4</li>
								<li>Revisions: up to 4</li>
								<li>Delivery Time: 5 to 7 days</li>
							</ul>
							<div className="btn-wrap">
								<a href="#" className="btn-buy">
									Select
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-4 mt-md-0">
						<div className="box featured" data-aos="zoom-in" data-aos-delay="100">
							<h3>Standard</h3>
							<p>Suited for small businesses.</p>
							<h4>
								<sup>$</sup>625
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities</li>
								<li>Authentication</li>
								<li>Database</li>
								<li className="na">Payment method</li>
								<li>Custom content upload</li>
								<li className="na">SEO</li>
								<li>Help for hosting</li>
								<li>Number of Pages: up to 10</li>
								<li>Revisions: up to 10</li>
								<li>Delivery Time: 10 to 12 days</li>
							</ul>
							<div className="btn-wrap">
								<a href="#" className="btn-buy">
									Select
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
						<div className="box" data-aos="zoom-in" data-aos-delay="200">
							<h3>Premium</h3>
							<p>Suited for enterprises or corporations.</p>
							<h4>
								<sup>$</sup>1200
							</h4>
							<ul>
								<li>Design Customization</li>
								<li>Responsive Design</li>
								<li>Include Source Code</li>
								<li>Custom functionalities</li>
								<li>Authentication</li>
								<li>Database</li>
								<li>Payment method</li>
								<li>Custom content upload</li>
								<li>SEO</li>
								<li>Help for hosting</li>
								<li>Number of Pages: up to 20</li>
								<li>Revisions: up to 20</li>
								<li>Delivery Time: 15 to 17 days</li>
							</ul>
							<div className="btn-wrap">
								<a href="#" className="btn-buy">
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
								If your project don't fit in other plans, feel free to reach out to me so we can better
								define your goals.
							</p>
							<div className="btn-wrap">
								<a href="#" className="btn-buy">
									Ask for quotation
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
