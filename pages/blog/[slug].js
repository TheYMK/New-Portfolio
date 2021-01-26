import React, { useEffect, useState } from 'react';
import { getSingleBlog, getRelatedBlogs } from '../../actions/blog';
import BlogDetails from '../../components/blog/BlogDetails';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/Layout';
import DisqusThread from '../../components/disqus/DisqusThread';
import { toast } from 'react-toastify';
import BlogItem from '../../components/blog/BlogItem';

const BlogPage = ({ blog }) => {
	const [ relatedBlogs, setRelatedBlogs ] = useState([]);

	useEffect(() => {
		loadRelatedBlog();
	}, []);

	const loadRelatedBlog = async () => {
		try {
			const blogs = await getRelatedBlogs(blog);
			setRelatedBlogs(blogs.data);
		} catch (err) {
			console.log(err);
		}
	};

	// Disqus
	const showComments = () => {
		// console.log(blog.title);
		return (
			<div>
				<DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
			</div>
		);
	};

	const showRelatedBlogs = () => {
		return relatedBlogs.map((r, i) => <BlogItem blog={r} key={i} />);
	};

	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="">
				<Breadcrumbs pageTitle="Blog Details" />
				<main id="main">
					<BlogDetails blog={blog} />
					<div className="container pb-5">{showComments()}</div>
					<div className="container py-5">
						<hr />
						<h4 className="pt-5 pb-5 h2">Related blogs</h4>
						<section className="blogs">
							<div className="row">{showRelatedBlogs()}</div>
						</section>
					</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleBlog(params.slug).then(async (res) => {
		return {
			props: {
				blog: res.data
			}
		};
	});
}

export default BlogPage;
