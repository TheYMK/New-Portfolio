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

export default function Home() {
	return (
		<React.Fragment>
			<Layout headerStyle="header-transparent" headerActiveLink="home">
				<Hero />
				<main id="main">
					<About />
					<Skills />
					<CTA />
					<Services />
					<Portfolio />
					{/* <Testimonials /> */}
					<Pricing />
					<FAQ />
					<Contact />
				</main>
			</Layout>
		</React.Fragment>
	);
}
