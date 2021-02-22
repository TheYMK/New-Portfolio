import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/Layout';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Head from 'next/head';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const AboutMePage = ({ router }) => {
	const head = () => (
		<Head>
			<title>Kaym Kassai | About Me</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Kaym Kassai, Software Engineer, located in Shanghai, China. I have skills in various domain and a serious passion for Web development, Mobile development and creating intuitive, dynamic user experiences..."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Who am I?`} />
			<meta
				property="og:description"
				content="Kaym Kassai, Software Engineer, located in Shanghai, China. I have skills in various domain and a serious passion for Web development, Mobile development and creating intuitive, dynamic user experiences..."
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
			<Layout headerStyle="" headerActiveLink="">
				<MessengerCustomerChat
					pageId="100162721696650"
					appId={`${FB_APP_ID}`}
					themeColor="#f56a6a"
					loggedInGreeting="Hi! How can I help you?"
					loggedOutGreeting="Hi! How can I help you?"
					shouldShowDialog={true}
				/>
				<Breadcrumbs pageTitle="About me" />
				<main id="main">
					<section id="about" className="about">
						<div className="container">
							<div className="section-title" data-aos="zoom-out">
								<h2>About</h2>
								<p>Who Am I ?</p>
							</div>

							<div className="row content" data-aos="fade-up">
								<div className="col-lg-12 pt-4 pt-lg-0">
									<p>
										<strong>Kaym Kassai</strong>, Software Engineer, located in Shanghai, China.
										<br />
										<br />
										I have skills in various domain and a serious passion for{' '}
										<strong style={{ color: '#f56a6a' }}>Web development</strong>, Mobile
										development and creating intuitive, dynamic user experiences. <br />All projects
										that I've maintained, developed and launched are created from scratch, carrying
										the development of its' back-end and front-end codebases.
										<br />
										<br />
										I'm a quick learner, confident communicator, and strategic thinker. My current
										toolset includes Javascript, HTML&CSS, Node.JS, React, Next.js, Redux, MongoDB,
										Java, Swift, and various frameworks, libraries, and technologies related to Web
										Development and Mobile Development. I am a huge fan of Javascript and
										technologies related to this beautiful language. Definitely the guy you would
										love to work with as I will bring a smile to your face with my stupid and silly
										jokes. And guess what?... I'm currently available for a position that will allow
										me to improve his programming, communication, and teamwork skills (because yes
										it's not just all about coding).
										<br />
										<br />
										<strong>OTHER THAN MY PRO SKILLS</strong>: I speak 6 languages: French (10/10),
										English(10/10), Chinese(8/10), Comorian(10/10), Spanish(5/10) and Arabic(5/10).
										He loves traveling, <strong style={{ color: '#f56a6a' }}>COFFEE</strong>, gaming
										and reading.
										<br />
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(AboutMePage);
