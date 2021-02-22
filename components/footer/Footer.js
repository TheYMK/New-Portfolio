import React from 'react';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<h3>Follow me</h3>

				<div className="social-links">
					<a href="https://twitter.com/kassai_kaym" target="blank" className="twitter">
						<i className="bx bxl-twitter" />
					</a>
					<a href="https://www.facebook.com/kassaikaym " target="blank" className="facebook">
						<i className="bx bxl-facebook" />
					</a>
					<a href="https://www.instagram.com/kaym.js/" target="blank" className="instagram">
						<i className="bx bxl-instagram" />
					</a>
					<a href="https://www.linkedin.com/in/kaym-kassai-693011157/" target="blank" className="linkedin">
						<i className="bx bxl-linkedin" />
					</a>
				</div>

				<div className="credits">Kaym Kassai ©2021</div>
			</div>
		</footer>
	);
};

export default Footer;
