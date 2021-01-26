import React from 'react';
import Slider from 'react-slick';
import renderHTML from 'react-render-html';
import moment from 'moment';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	swipe: true
};

const BlogDetails = ({ blog }) => {
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
						{blog.image.length > 0 ? (
							<div>
								<img src={blog.image} className="img-fluid" alt="blog image" />
							</div>
						) : (
							<img src={'/static/img/noimage.jpg'} className="img-fluid" alt="blog image" />
						)}
					</Slider>

					<div className="portfolio-info">
						<h3>Blog information</h3>
						<ul>
							<li>
								<strong>Categories</strong>:{' '}
								{blog.categories.map((c, i) => (
									<div className="badge bg-info text-white m-1" key={i}>
										{c.name}
									</div>
								))}
							</li>
							<li>
								<strong>Tags</strong>:{' '}
								{blog.tags.map((t, i) => (
									<div className="badge bg-success text-white m-1" key={i}>
										{t.name}
									</div>
								))}
							</li>
							<li>
								<strong>Published </strong>: {moment(blog.createdAt).fromNow()}
							</li>
							<li>
								<strong>Last update </strong>: {moment(blog.updatedAt).fromNow()}
							</li>
						</ul>
					</div>
				</div>

				<div className="portfolio-description ">{renderHTML(blog.body)}</div>
			</div>
		</section>
	);
};

export default BlogDetails;
