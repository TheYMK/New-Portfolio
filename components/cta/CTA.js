import React from 'react';

const CTA = () => {
	return (
		<section id="cta" className="cta">
			<div className="container">
				<div className="row" data-aos="zoom-out">
					<div className="col-lg-9 text-center text-lg-left">
						<h3>You have a project in mind?</h3>
						<p>
							{' '}
							Your business is unique and your website should reflect that. Do you need a website that
							converts? A website that is SEO driven? Custom coding solutions to reach specific goals?{' '}
							<br />
							<br />
							While there may be many who can provide these services, I seek to provide them with a
							comprehensive, pre-determined strategy to assure your return on investment.
							<br />
							<br />
							I have a clear vision of what makes a solid architecture for your system, and how to make
							the website scalable and easily customizable.
							<br />
							<br />
							So what are We waiting for? Let's go and build amazing things together... Do not hesitate to
							reach out with any questions you have. I look forward to working with you!
						</p>
					</div>
					<div className="col-lg-3 cta-btn-container text-center">
						<a className="cta-btn align-middle" href="#">
							View Packages
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
