import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import CTA from '../components/cta/CTA';
import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import Pricing from '../components/pricing/Pricing';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Layout from '../components/Layout';
import { getProjects } from '../actions/project';
import { getBlogsWithCategoriesAndTags } from '../actions/blog';
import Blog from '../components/blog/Blog';
import { DOMAIN, FB_APP_ID } from '../config';
import { withRouter } from 'next/router';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = ({ projects, blogs, categories, tags, totalBlogs, blogsLimit, blogsSkip, router }) => {
	const head = () => (
		<Head>
			<title>Kaym Kassai | Home</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Your business is unique and your website should reflect that. Do you need a website that converts? A website that is SEO driven? Custom coding solutions to reach specific goals?
				While there may be many who can provide these services, I seek to provide them with a comprehensive, pre-determined strategy to assure your return on investment.
				I have a clear vision of what makes a solid architecture for your system, and how to make the website scalable and easily customizable."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Let's take your business to the next step! | Kaym Kassai`} />
			<meta
				property="og:description"
				content="Your business is unique and your website should reflect that. Do you need a website that converts? A website that is SEO driven? Custom coding solutions to reach specific goals?
				While there may be many who can provide these services, I seek to provide them with a comprehensive, pre-determined strategy to assure your return on investment.
				I have a clear vision of what makes a solid architecture for your system, and how to make the website scalable and easily customizable."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="Kaym Kassai" />
			<meta property="og:image" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout headerStyle="header-transparent" headerActiveLink="home">
				<MessengerCustomerChat
					pageId="100162721696650"
					appId={`${FB_APP_ID}`}
					themeColor="#f56a6a"
					loggedInGreeting="Hi! How can I help you?"
					loggedOutGreeting="Hi! How can I help you?"
					shouldShowDialog={true}
				/>
				<Hero />
				<main id="main">
					<About />
					<Skills />
					<CTA />
					<Services />
					<Portfolio projects={projects} />
					{/* <Testimonials /> */}
					<Pricing />
					<Blog
						blogs={blogs}
						categories={categories}
						tags={tags}
						totalBlogs={totalBlogs}
						blogsLimit={blogsLimit}
						blogsSkip={blogsSkip}
					/>
					<FAQ />
					<Contact />
				</main>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	let skip = 0;
	let limit = 4;

	return getProjects().then((res) => {
		return getBlogsWithCategoriesAndTags(skip, limit).then((result) => {
			return {
				props: {
					projects: res.data,
					blogs: result.data.blogs,
					categories: result.data.categories,
					tags: result.data.tags,
					totalBlogs: result.data.size,
					blogsLimit: limit,
					blogsSkip: skip
				}
			};
		});
	});
}

export default withRouter(Home);
