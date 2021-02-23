import React from 'react';
import Slider from 'react-slick';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	swipe: true
};

const PortfolioDetails = ({ project }) => {
	return (
		<section id="portfolio-details" className="portfolio-details">
			<div className="container">
				<div className="portfolio-details-container" data-aos="fade-up">
					{/* <div className="owl-carousel portfolio-details-carousel">
						<img src="/static/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
						<img src="/static/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
						<img src="/static/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
					</div> */}
					<Slider {...settings} className="">
						{project.images.length > 0 ? (
							project.images.map((img, i) => (
								<div key={i}>
									<img src={img.url} className="img-fluid" alt="project image" />
								</div>
							))
						) : (
							<img src={'/static/img/noimage.jpg'} className="img-fluid" alt="project image" />
						)}
						{/* <div>
							<img src="/static/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
						</div>
						<div>
							<img src="/static/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
						</div>
						<div>
							<img src="/static/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
						</div> */}
					</Slider>

					<div className="portfolio-info text-center mt-3">
						<h3>Project information</h3>
						<ul>
							<li>
								<strong>Category</strong>: {project.category}
							</li>
							<li>
								<strong>Client</strong>: {project.client}
							</li>
							<li>
								<strong>Project date</strong>: {project.date}
							</li>
							<li>
								<strong>Project URL</strong>:{' '}
								<a href={project.url} target="blank">
									{project.url}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="portfolio-description">
					<h2>About this project</h2>
					<h4>Front-end</h4>
					<p>{project.description_frontend}</p>
				</div>
				<div className="portfolio-description">
					<h4>Back-end</h4>
					<p>{project.description_backend}</p>
				</div>
				<div className="portfolio-description">
					<h4>Challenges & Conclusion</h4>
					<p>{project.description_challenges}</p>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetails;
