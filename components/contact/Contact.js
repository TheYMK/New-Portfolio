import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { emailContactForm } from '../../actions/form';

const Contact = () => {
	const [ values, setValues ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const { name, email, subject, message } = values;

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await emailContactForm(values);
			setValues({ ...values, name: '', email: '', subject: '', message: '' });
			toast.success('Your message has been sent! I will get back to you as soon as possible :)');
		} catch (err) {
			toast.error('Failed to send your message! Please try again :(');
		}
	};

	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-title" data-aos="zoom-out">
					<h2>Contact</h2>
					<p>Got other questions?</p>
				</div>

				<div className="row mt-5">
					<div className="col-lg-4" data-aos="fade-right">
						<div className="info">
							<div className="address">
								<i className="icofont-google-map" />
								<h4>Location:</h4>
								<p>Shanghai, Fengxian District, Haiquan Road 100</p>
							</div>

							<div className="email">
								<i className="icofont-envelope" />
								<h4>Email:</h4>
								<p>info@kaymkassai.tech</p>
							</div>

							<div className="phone">
								<i className="icofont-phone" />
								<h4>Call:</h4>
								<p>+86 17126619126 / +269 3725168</p>
							</div>
						</div>
					</div>

					<div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
						<form onSubmit={handleSubmit}>
							<div className="form-row">
								<div className="col-md-6 form-group">
									<input
										type="text"
										name="name"
										className="form-control"
										id="name"
										placeholder="Your Name"
										value={name}
										data-rule="minlen:4"
										data-msg="Please enter at least 4 chars"
										onChange={(e) => setValues({ ...values, name: e.target.value })}
									/>
								</div>
								<div className="col-md-6 form-group">
									<input
										type="email"
										className="form-control"
										name="email"
										id="email"
										placeholder="Your Email"
										data-rule="email"
										value={email}
										data-msg="Please enter a valid email"
										onChange={(e) => setValues({ ...values, email: e.target.value })}
									/>
								</div>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="subject"
									id="subject"
									placeholder="Subject"
									data-rule="minlen:4"
									value={subject}
									data-msg="Please enter at least 8 chars of subject"
									onChange={(e) => setValues({ ...values, subject: e.target.value })}
								/>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									name="message"
									rows="5"
									data-rule="required"
									data-msg="Please write something for us"
									placeholder="Message"
									value={message}
									onChange={(e) => setValues({ ...values, message: e.target.value })}
								/>
							</div>

							<div className="text-center">
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
