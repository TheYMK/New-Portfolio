import React from 'react';
import BlogItem from './BlogItem';

const Blog = () => {
	return (
		<section id="blog" className="blogs">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Blog</h2>
					<p>Latest Blogs</p>
				</div>

				<div className="row">
					<BlogItem />
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			</div>
		</section>
	);
};

export default Blog;
