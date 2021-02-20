import React from 'react';
import Link from 'next/link';

const About = () => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>About</h2>
					<p>Who Am I ?</p>
				</div>

				<div className="row content" data-aos="fade-up">
					<div className="col-lg-6">
						<img src="/static/img/me.png" alt="me" className="img-fluid" />
					</div>
					<div className="col-lg-6 pt-4 pt-lg-0">
						<p>
							<strong>Kaym Kassai</strong>, Software Engineer, located in Shanghai, China.
							<br />
							<br />
							He has skills in various domain and a serious passion for{' '}
							<strong style={{ color: '#f56a6a' }}>Web development</strong>, Mobile development and
							creating intuitive, dynamic user experiences. <br />All projects that He has maintained,
							developed and launched are created from scratch, carrying the development of its' back-end
							and front-end codebases.
							<br />
							<br />
							He is a quick learner, confident communicator, and strategic thinker. His current toolset
							includes Javascript, HTML&CSS, Node.JS, React, Next.js, Redux, MongoDB, Java, Swift, and
							various frameworks, libraries, and technologies related to Web Development and Mobile
							Development. He is a huge fan of Javascript and technologies related to this beautiful
							language. Definitely the guy you would love to work with as he will bring a smile to your
							face with his stupid and silly jokes. And guess what?... He is currently available for a
							position that will allow him to improve his programming, communication, and teamwork skills
							(because yes it's not just all about coding).
							<br />
							<br />
							<strong>OTHER THAN HIS PRO SKILLS</strong>: He speaks 6 languages: French (10/10),
							English(10/10), Chinese(8/10), Comorian(10/10), Spanish(5/10) and Arabic(5/10). He loves
							traveling, <strong style={{ color: '#f56a6a' }}>COFFEE</strong>, gaming and reading.
							<br />
							<br />
							Oh, and by the way, he does not love talking about himself in the 3rd person at all :)
						</p>
						<Link href="/about">
							<a className="btn-learn-more">Get To Know More About Me</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
