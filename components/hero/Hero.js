import React from 'react';

const Hero = () => {
	return (
		<section id="hero" className="d-flex flex-column justify-content-end align-items-center">
			<div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
				<div className="carousel-item active">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">
							<span>Kaym Kassai</span>
						</h2>
						<p className="animate__animated fanimate__adeInUp">Freelance Full-Stack Developer</p>

						<a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">
							Get To Know Me
						</a>
					</div>
				</div>

				<div className="carousel-item">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">
							<span>Let's take your business to the next step!</span>
						</h2>
						<p className="animate__animated fanimate__adeInUp">
							I do Web Development, Search Engine Optimization & Design
						</p>
						<a href="#services" className="btn-get-started animate__animated animate__fadeInUp scrollto">
							View services
						</a>
					</div>
				</div>

				<div className="carousel-item">
					<div className="carousel-container">
						<h2 className="animate__animated animate__fadeInDown">
							<span>Special Offer</span>
						</h2>
						<p className="animate__animated fanimate__adeInUp">
							1 year free Domain Name + Hosting + Pro Email + SSL Certificate
						</p>
						<a href="#pricing" className="btn-get-started animate__animated animate__fadeInUp scrollto">
							View packages
						</a>
					</div>
				</div>

				<a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>

				<a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>

			<svg
				className="hero-waves"
				xmlns="http://www.w3.org/2000/svg"
				xlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28 "
				preserveAspectRatio="none"
			>
				<defs>
					<path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g className="wave1">
					<use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
				</g>
				<g className="wave2">
					<use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
				</g>
				<g className="wave3">
					<use href="#wave-path" x="50" y="9" fill="#fff" />
				</g>
			</svg>
		</section>
	);
};

export default Hero;
