import React, { useEffect } from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Link from 'next/link';

const BlogItem = ({ blog }) => {
	return (
		<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
			<div className="blog" data-aos="fade-up">
				<div className="blog-img">
					<img
						src={blog.image.length > 0 ? `${blog.image}` : '/static/images/noimage.jpg'}
						className="img-fluid"
						alt=""
					/>
					<div className="social">
						<Link href={`/blog/${blog.slug}`}>
							<a>
								<i className="icofont-eye" />
							</a>
						</Link>

						{/* <a href="">
							<i className="icofont-facebook" />
						</a>
						<a href="">
							<i className="icofont-instagram" />
						</a>
						<a href="">
							<i className="icofont-linkedin" />
						</a> */}
					</div>
				</div>
				<div className="blog-info">
					<h4>{blog.title}</h4>
					{/* <span>{renderHTML(blog.excerpt)}</span> */}
					<span>Published {moment(blog.updatedAt).fromNow()}</span>
					<div className="text-center mt-3">
						{blog.categories.map((c, i) => (
							<div className="badge bg-info text-white m-1" key={i}>
								{c.name}
							</div>
						))}
					</div>
					<div className="text-center">
						{blog.tags.map((t, i) => (
							<div className="badge bg-success text-white m-1" key={i}>
								{t.name}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
