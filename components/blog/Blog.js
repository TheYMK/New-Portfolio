import React, { useState } from 'react';
import BlogItem from './BlogItem';
import { getBlogsWithCategoriesAndTags } from '../../actions/blog';

const Blog = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogsSkip }) => {
	const [ limit, setLimit ] = useState(blogsLimit);
	const [ skip, setSkip ] = useState(blogsSkip);
	const [ size, setSize ] = useState(totalBlogs);
	const [ loadedBlogs, setLoadedBlogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const showAllBlogs = () => {
		return blogs.map((b, i) => <BlogItem blog={b} key={i} />);
	};

	const loadMoreButton = () => {
		return (
			size > 0 &&
			size >= limit && (
				<a className="project-btn" onClick={loadMore}>
					{loading ? 'Loading...' : 'Load More'}
				</a>
			)
		);
	};

	const loadMore = () => {
		let toSkip = skip + limit;
		setLoading(true);
		getBlogsWithCategoriesAndTags(toSkip, limit).then((res) => {
			setLoadedBlogs([ ...loadedBlogs, ...res.data.blogs ]);
			setSize(res.data.size);
			setSkip(toSkip);
			setLoading(false);
		});
	};

	const showLoadedBlogs = () => {
		return loadedBlogs.map((b, i) => <BlogItem blog={b} key={i} />);
	};

	return (
		<section id="blog" className="blogs">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Blog</h2>
					<p>Latest Blogs</p>
				</div>

				<div className="row">
					{showAllBlogs()}
					{showLoadedBlogs()}
					{/* <BlogItem />
					<BlogItem />
					<BlogItem />
					<BlogItem /> */}
				</div>
				<div className="text-center" data-aos="fade-up">
					{loadMoreButton()}
				</div>
			</div>
		</section>
	);
};

export default Blog;
