import React from 'react';
import { getSingleBlog } from '../../actions/blog';
import BlogDetails from '../../components/blog/BlogDetails';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/Layout';
import DisqusThread from '../../components/disqus/DisqusThread';

const BlogPage = ({ blog }) => {
	// Disqus
	const showComments = () => {
		console.log(blog.title);
		return (
			<div>
				<DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
			</div>
		);
	};

	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="">
				<Breadcrumbs pageTitle="Blog Details" />
				<main id="main">
					<BlogDetails blog={blog} />
					<div className="container pb-5">{showComments()}</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleBlog(params.slug).then((res) => {
		return {
			props: {
				blog: res.data
			}
		};
	});
}

export default BlogPage;
