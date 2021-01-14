import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Portfolio</h2>
					<p>What I've done</p>
				</div>

				<ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
					<li data-filter="*" className="filter-active">
						All
					</li>
					<li data-filter=".filter-web">Web</li>
					<li data-filter=".filter-mobile">Mobile</li>
					<li data-filter=".filter-design">Design</li>
				</ul>

				<div className="row portfolio-container" data-aos="fade-up">
					<PortfolioItem
						type={'design'}
						imgSrc={'/static/img/portfolio/portfolio-2.jpg'}
						title="E.M.S"
						category="Design"
					/>
					<PortfolioItem
						type={'web'}
						imgSrc={'/static/img/portfolio/portfolio-1.jpg'}
						title="E.M.S"
						category="Web"
					/>
					<PortfolioItem
						type={'mobile'}
						imgSrc={'/static/img/portfolio/portfolio-3.jpg'}
						title="E.M.S"
						category="Mobile"
					/>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
