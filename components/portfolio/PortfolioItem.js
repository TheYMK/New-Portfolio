import React from 'react';
import Link from 'next/link';

const PortfolioItem = ({ type, imgSrc, title, category, slug }) => {
	return (
		<div className={`col-lg-4 col-md-6 portfolio-item filter-${type}`}>
			<div className="portfolio-img">
				<img src={imgSrc} className="img-fluid" alt="" />
			</div>
			<div className="portfolio-info">
				<h4>{title}</h4>
				<p>{category}</p>
				<a href={imgSrc} data-gall="portfolioGallery" className="venobox preview-link" title={title}>
					<i className="bx bx-plus" />
				</a>
				<Link href={`/project/${slug}`}>
					<a className="details-link" title="More Details">
						<i className="bx bx-link" />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default PortfolioItem;
