import React, { useEffect, useState } from 'react';
import { getSingleBlog, getRelatedBlogs } from '../../actions/blog';
import BlogDetails from '../../components/blog/BlogDetails';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/Layout';
import DisqusThread from '../../components/disqus/DisqusThread';
import { toast } from 'react-toastify';
import BlogItem from '../../components/blog/BlogItem';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Head from 'next/head';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const BlogPage = ({ blog, router, params }) => {
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

	const head = () => (
		<Head>
			<title>Kaym Kassai | Blog Details</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta name="description" content={`${blog.mdesc}...`} />
			<link rel="canonical" href={`${DOMAIN}/blog/${params.slug}`} />
			<meta property="og:title" content={`${blog.title} | Kaym Kassai`} />
			<meta property="og:description" content={`${blog.mdesc}...`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}/blog/${params.slug}`} />
			<meta property="og:site_name" content="Kaym Kassai" />
			<meta property="og:image" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

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
			{head()}
			<Layout headerStyle="" headerActiveLink="">
				<MessengerCustomerChat
					pageId="100162721696650"
					appId={`${FB_APP_ID}`}
					themeColor="#f56a6a"
					loggedInGreeting="Hi! How can I help you?"
					loggedOutGreeting="Hi! How can I help you?"
					shouldShowDialog={false}
				/>
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
				blog: res.data,
				params
			}
		};
	});
}

export default withRouter(BlogPage);
