import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/Layout';

const AboutMePage = () => {
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="">
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

export default AboutMePage;
