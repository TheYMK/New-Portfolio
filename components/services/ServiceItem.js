import React from 'react';

const ServiceItem = ({ color, title, description, icon }) => {
	return (
		<div className="col-lg-4 col-md-6 mt-5">
			<div className="icon-box" data-aos="zoom-in-left">
				<div className="icon">
					<i className={icon} style={{ color: color }} />
				</div>
				<h4 className="title">
					<a href="">{title}</a>
				</h4>
				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default ServiceItem;
