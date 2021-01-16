import React from 'react';

const BlogItem = () => {
	return (
		<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
			<div className="blog" data-aos="fade-up">
				<div className="blog-img">
					<img src="/static/img/team/team-1.jpg" className="img-fluid" alt="" />
					<div className="social">
						<a href="">
							<i className="icofont-twitter" />
						</a>
						<a href="">
							<i className="icofont-facebook" />
						</a>
						<a href="">
							<i className="icofont-instagram" />
						</a>
						<a href="">
							<i className="icofont-linkedin" />
						</a>
					</div>
				</div>
				<div className="blog-info">
					<h4>Walter White</h4>
					<span>Chief Executive Officer</span>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
