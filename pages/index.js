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

const Home = ({ projects, blogs, categories, tags, totalBlogs, blogsLimit, blogsSkip }) => {
	return (
		<React.Fragment>
			<Layout headerStyle="header-transparent" headerActiveLink="home">
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

export default Home;
