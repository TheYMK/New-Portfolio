import React from 'react';

const FAQ = () => {
	return (
		<section id="faq" className="faq">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>F.A.Q</h2>
					<p>Frequently Asked Questions</p>
				</div>

				<ul className="faq-list">
					<li data-aos="fade-up" data-aos-delay="100">
						<a data-toggle="collapse" className="" href="#faq1">
							Do you think I need a new website?? <i className="icofont-simple-up" />
						</a>
						<div id="faq1" className="collapse show" data-parent=".faq-list">
							<p>
								Well, chances are, if you are asking this question, then you probably know the answer.
								Your organization or business may not need the most cutting edge website, but its design
								should feel relevant and fresh. If your website is more than 5 years old, then the
								answer is most likely, yes, it’s time for a redesign. Also, if you don’t like the look
								of your website, why should your viewers feel any different?
							</p>
						</div>
					</li>

					<li data-aos="fade-up" data-aos-delay="200">
						<a data-toggle="collapse" href="#faq2" className="collapsed">
							Why the delivery takes too long? <i className="icofont-simple-up" />
						</a>
						<div id="faq2" className="collapse" data-parent=".faq-list">
							<p>
								The process I use to build your website takes a certain amount of time and a lot of
								planning and research. Unlike other agencies, I DON’T use templates. I build your
								website from scratch, which means you get a unique design tailored around your business.
								Buying a website from me should not just simply be seen as a business expense as your
								website is a sales tool that should earn you money.
							</p>
						</div>
					</li>

					<li data-aos="fade-up" data-aos-delay="300">
						<a data-toggle="collapse" href="#faq3" className="collapsed">
							How do we communicate throughout the website build? <i className="icofont-simple-up" />
						</a>
						<div id="faq3" className="collapse" data-parent=".faq-list">
							<p>
								Before we begin working together, we’ll usually have an initial chat on the phone or via
								Zoom or whatever is suitable for both of us to discuss the project. Once we get started,
								most of the communication will take place over email. This makes the process a lot
								easier as we’ll have all of the information saved and can come back to it later. Once
								I’ve finished the the development process of the project, we will have a test session
								together and make revisions if necessary.
							</p>
						</div>
					</li>

					<li data-aos="fade-up" data-aos-delay="400">
						<a data-toggle="collapse" href="#faq4" className="collapsed">
							What will you need from me? <i className="icofont-simple-up" />
						</a>
						<div id="faq4" className="collapse" data-parent=".faq-list">
							<p>
								It really depends on what type of website you want. We’ll be able to discuss this on our
								discovery call before we start working together. Depending on which package you select I
								could need…
							</p>

							<ul>
								<li>Images of you and your team</li>
								<li>Images of your workplace</li>
								<li>Content for the website e.g. text, videos PDFs etc</li>
								<li>Logo</li>
								<li>List of custom functionalities</li>
							</ul>
						</div>
					</li>

					<li data-aos="fade-up" data-aos-delay="500">
						<a data-toggle="collapse" href="#faq5" className="collapsed">
							What if I don’t like the website? <i className="icofont-simple-up" />
						</a>
						<div id="faq5" className="collapse" data-parent=".faq-list">
							<p>
								Before I build your new website, I'll design a mockup of the pages. I’ll design a layout
								in Photoshop first, that way you’ll get to see our initial designs within approximately
								3 days. This is your opportunity to give us feedback and if you really don’t like it,
								you don’t have to move forward. Best part is, this won’t cost you anything.
							</p>
						</div>
					</li>

					<li data-aos="fade-up" data-aos-delay="600">
						<a data-toggle="collapse" href="#faq6" className="collapsed">
							Do you offer a payment schedule? <i className="icofont-simple-up" />
						</a>
						<div id="faq6" className="collapse" data-parent=".faq-list">
							<p>
								Yes, I split the payment into two. The first 50% is usually taken once you have seen the
								mockup of your homepage and you’re happy to move forward. The following 50% is taken 2
								days before the deadline we will fix.
							</p>
						</div>
					</li>
					<li data-aos="fade-up" data-aos-delay="700">
						<a data-toggle="collapse" href="#faq7" className="collapsed">
							Do you host the website? <i className="icofont-simple-up" />
						</a>
						<div id="faq7" className="collapse" data-parent=".faq-list">
							<p>
								Sorry. No hosting fees are included in the packages. I ask that you select a hosting
								provider of your choice. And if you need help with the hosting it will cost you more.
								The price depends on your hosting provider choice. Some potential hosting providers are
								GoDaddy, Digital Ocean, BlueHost, Heroku or really anywhere you like.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
