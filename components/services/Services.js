import React from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
	return (
		<section id="services" className="services">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Services</h2>
					<p>What do I offer ?</p>
				</div>

				<div className="row">
					<ServiceItem
						color="#ff689b"
						title="Web Development"
						description="Portfolio, Landing Page, Blogs, E-commerce, Portal, News or magazine, Corporate, etc..."
						icon="las la-code"
					/>
					<ServiceItem
						color="#4680ff"
						title="Search Engine Optimization"
						description="Custom SEO services that fit your unique business needs. Get an analysis, strategy, forecast, project plan and key performance indicators."
						icon="las la-tachometer-alt"
					/>
					<ServiceItem
						color="#41cf2e"
						title="Design"
						description="Business card, Website, Logo, Flyer, etc..."
						icon="las la-palette"
					/>
					{/* <div className="col-lg-4 col-md-6">
						<div className="icon-box" data-aos="zoom-in-left">
							<div className="icon">
								<i className="las la-basketball-ball" style={{ color: '#ff689b' }} />
							</div>
							<h4 className="title">
								<a href="">Lorem Ipsum</a>
							</h4>
							<p className="description">
								Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
								occaecati cupiditate non provident
							</p>
						</div>
					</div> */}
					{/* <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
						<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
							<div className="icon">
								<i className="las la-book" style={{ color: '#e9bf06' }} />
							</div>
							<h4 className="title">
								<a href="">Dolor Sitema</a>
							</h4>
							<p className="description">
								Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat tarad limino ata
							</p>
						</div>
					</div> */}

					{/* <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
						<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
							<div className="icon">
								<i className="las la-file-alt" style={{ color: '#3fcdc7' }} />
							</div>
							<h4 className="title">
								<a href="">Sed ut perspiciatis</a>
							</h4>
							<p className="description">
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur
							</p>
						</div>
					</div> */}
					{/* <div className="col-lg-4 col-md-6 mt-5">
						<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="300">
							<div className="icon">
								<i className="las la-tachometer-alt" style={{ color: '#41cf2e' }} />
							</div>
							<h4 className="title">
								<a href="">Magni Dolores</a>
							</h4>
							<p className="description">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum
							</p>
						</div>
					</div> */}

					{/* <div className="col-lg-4 col-md-6 mt-5">
						<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="400">
							<div className="icon">
								<i className="las la-globe-americas" style={{ color: '#d6ff22' }} />
							</div>
							<h4 className="title">
								<a href="">Nemo Enim</a>
							</h4>
							<p className="description">
								At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque
							</p>
						</div>
					</div> */}
					{/* <div className="col-lg-4 col-md-6 mt-5">
						<div className="icon-box" data-aos="zoom-in-left" data-aos-delay="500">
							<div className="icon">
								<i className="las la-clock" style={{ color: '#4680ff' }} />
							</div>
							<h4 className="title">
								<a href="">Eiusmod Tempor</a>
							</h4>
							<p className="description">
								Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
								nobis est eligendi
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Services;
