import React from 'react';

const Breadcrumbs = ({ pageTitle }) => {
	return (
		<section className="breadcrumbs">
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<h2>{pageTitle}</h2>
					<ol>
						<li>
							<a href="/">Home</a>
						</li>
						<li>{pageTitle}</li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default Breadcrumbs;
