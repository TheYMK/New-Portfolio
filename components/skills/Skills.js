import React from 'react';

const Skills = () => {
	return (
		<section id="skills" className="skills">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Skills</h2>
					<p>My Expertise</p>
				</div>
				<ul className="nav nav-tabs row d-flex">
					<li className="nav-item col-3" data-aos="zoom-in">
						<a className="nav-link active show" data-toggle="tab" href="#tab-1">
							<i className="ri-global-fill" />
							<h4 className="d-none d-lg-block">Web Development</h4>
						</a>
					</li>
					<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
						<a className="nav-link" data-toggle="tab" href="#tab-2">
							<i className="ri-layout-masonry-fill" />
							<h4 className="d-none d-lg-block">UI DESIGN</h4>
						</a>
					</li>
					<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
						<a className="nav-link" data-toggle="tab" href="#tab-3">
							<i className="ri-smartphone-fill" />
							<h4 className="d-none d-lg-block">Mobile Development</h4>
						</a>
					</li>
					<li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
						<a className="nav-link" data-toggle="tab" href="#tab-4">
							<i className="ri-tools-fill" />
							<h4 className="d-none d-lg-block">Tools</h4>
						</a>
					</li>
				</ul>

				<div className="tab-content" data-aos="fade-up">
					<div className="tab-pane active show" id="tab-1">
						<div className="row">
							<div className="col-md-4">
								<h4 className="">Front-End</h4>

								<ul className="mt-4">
									<li>
										<i className="ri-check-double-line" /> HTML & CSS
									</li>
									<li>
										<i className="ri-check-double-line" /> Javascript
									</li>
									<li>
										<i className="ri-check-double-line" /> TypeScript
									</li>
									<li>
										<i className="ri-check-double-line" /> React
									</li>
									<li>
										<i className="ri-check-double-line" /> Next.js
									</li>
									<li>
										<i className="ri-check-double-line" /> Redux
									</li>
									<li>
										<i className="ri-check-double-line" /> Context API
									</li>
									<li>
										<i className="ri-check-double-line" /> Bootstrap
									</li>
								</ul>
							</div>

							<div className="col-md-4">
								<h4 className="">Back-End</h4>

								<ul className="mt-4">
									<li>
										<i className="ri-check-double-line" /> Node.js
									</li>
									<li>
										<i className="ri-check-double-line" /> Express
									</li>
									<li>
										<i className="ri-check-double-line" /> MongoDB
									</li>
									<li>
										<i className="ri-check-double-line" /> Docker
									</li>
									<li>
										<i className="ri-check-double-line" /> Kubernetes
									</li>
									<li>
										<i className="ri-check-double-line" /> AWS
									</li>
									<li>
										<i className="ri-check-double-line" /> Firebase
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab-2">
						<div className="row">
							<div className="col-md-4">
								<ul className="mt-4">
									<li>
										<i className="ri-check-double-line" /> Photoshop
									</li>
									<li>
										<i className="ri-check-double-line" /> Illustrator
									</li>
									<li>
										<i className="ri-check-double-line" /> Adobe XD
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab-3">
						<div className="row">
							<div className="col-md-4">
								<ul className="mt-4">
									<li>
										<i className="ri-check-double-line" /> Android development with Java and Kotlin
									</li>
									<li>
										<i className="ri-check-double-line" /> iOS development with Swift
									</li>
									<li>
										<i className="ri-check-double-line" /> Cross-Plateform development with React
										Native
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab-4">
						<div className="row">
							<div className="col-md-4">
								<ul className="mt-4">
									<li>
										<i className="ri-check-double-line" /> VS Code
									</li>
									<li>
										<i className="ri-check-double-line" /> Android Studio
									</li>
									<li>
										<i className="ri-check-double-line" /> Xcode
									</li>
									<li>
										<i className="ri-check-double-line" /> Terminal
									</li>
									<li>
										<i className="ri-check-double-line" /> Sublime Text
									</li>
									<li>
										<i className="ri-check-double-line" /> MongoDB Compass
									</li>
									<li>
										<i className="ri-check-double-line" /> Postman
									</li>
									<li>
										<i className="ri-check-double-line" /> IntelliJ IDEA
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
