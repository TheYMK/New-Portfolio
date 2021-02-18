import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneInput from 'react-phone-number-input';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { createOrder } from '../../actions/order';
import { toast } from 'react-toastify';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	backButton: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));

function getSteps() {
	return [ 'Order Details', 'Personal Details', 'Payment information', 'Complete' ];
}

const PremiumPlanOrderCompletion = () => {
	const [ values, setValues ] = useState({
		// order
		order_type: 'premium',
		business_description: '',
		current_website_description: '',
		project_description: '',
		features_description: '',
		audience_description: '',
		budget_and_deadline_description: '',
		// personal
		client_fullname: '',
		client_email: '',
		client_phone_number: ''
	});

	const [ haveWebsite, setHaveWebsite ] = useState(false);

	const {
		order_type,
		business_description,
		current_website_description,
		project_description,
		features_description,
		audience_description,
		budget_and_deadline_description,
		client_fullname,
		client_email,
		client_phone_number
	} = values;

	const classes = useStyles();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const steps = getSteps();

	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return orderDetailsForm();
			case 1:
				return presonalDetailsForm();
			case 2:
				return paymentInformation();
			default:
				return packageInformation();
		}
	};

	const orderDetailsForm = () => (
		<form>
			<div className="form-group row">
				<div className="col-md-12">
					<label htmlFor="business_description">
						Do you want a business website? If yes, describe your business. If no, describe what your
						website is (will be) about.
					</label>
					<textarea
						className="form-control"
						id="business_description"
						rows="3"
						value={business_description}
						onChange={(e) => setValues({ ...values, business_description: e.target.value })}
					/>

					<small id="emailHelp" className="form-text text-muted">
						max character: {business_description.length} / 10000
					</small>
				</div>

				<div className="col-md-12 mt-4">
					<label>Do you currently have a website?</label>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="option"
							id="nowebsite"
							value="false"
							onClick={(e) => {
								setHaveWebsite(false);
								setValues({ ...values, current_website_description: '' });
							}}
							defaultChecked={true}
						/>
						<label className="form-check-label" htmlFor="nowebsite">
							No
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="option"
							id="yeswebsite"
							value="true"
							onClick={(e) => setHaveWebsite(true)}
						/>
						<label className="form-check-label" htmlFor="yeswebsite">
							Yes
						</label>
					</div>
				</div>
				{haveWebsite && (
					<div className="col-md-12 mt-4">
						<label htmlFor="current_website_description">
							If so, please provide the URL and explain what are the things you would like to change about
							your site?
						</label>
						<textarea
							className="form-control"
							id="current_website_description"
							rows="3"
							value={current_website_description}
							onChange={(e) => setValues({ ...values, current_website_description: e.target.value })}
						/>

						<small id="emailHelp" className="form-text text-muted">
							max character: {current_website_description.length} / 10000
						</small>
					</div>
				)}
				<div className="col-md-12 mt-4">
					<label htmlFor="project_description">
						What are your goals for this project? What will define this project as successful?
					</label>
					<textarea
						className="form-control"
						id="project_description"
						rows="3"
						value={project_description}
						onChange={(e) => setValues({ ...values, project_description: e.target.value })}
					/>

					<small id="emailHelp" className="form-text text-muted">
						max character: {project_description.length} / 10000
					</small>
				</div>
				<div className="col-md-12 mt-4">
					<label htmlFor="features_description">
						Is there anything in particular you want on your site? Describe all the features you want your
						website to have. (You have a maximum of 3 custom features)
					</label>
					<textarea
						className="form-control"
						id="features_description"
						rows="3"
						value={features_description}
						onChange={(e) => setValues({ ...values, features_description: e.target.value })}
					/>

					<small id="emailHelp" className="form-text text-muted">
						max character: {features_description.length} / 10000
					</small>
				</div>
				<div className="col-md-12 mt-4">
					<label htmlFor="audience_description">
						Who is your target audience? What information does your audience need to know from your website?
					</label>
					<textarea
						className="form-control"
						id="audience_description"
						rows="3"
						value={audience_description}
						onChange={(e) => setValues({ ...values, audience_description: e.target.value })}
					/>

					<small id="emailHelp" className="form-text text-muted">
						max character: {audience_description.length} / 10000
					</small>
				</div>
				<div className="col-md-12 mt-4">
					<label htmlFor="budget_and_deadline_description">
						What’s your deadline and budget? How flexible are they?
					</label>
					<textarea
						className="form-control"
						id="budget_and_deadline_description"
						rows="3"
						value={budget_and_deadline_description}
						onChange={(e) => setValues({ ...values, budget_and_deadline_description: e.target.value })}
					/>

					<small id="emailHelp" className="form-text text-muted">
						max character: {budget_and_deadline_description.length} / 10000
					</small>
				</div>
			</div>
		</form>
	);

	const presonalDetailsForm = () => (
		<form>
			<div className="form-group row">
				<div className="col-md-4">
					<label htmlFor="client_fullname">Full name</label>
					<input
						type="text"
						className="form-control"
						id="client_fullname"
						placeholder="John Doe"
						value={client_fullname}
						onChange={(e) => setValues({ ...values, client_fullname: e.target.value })}
						required
					/>
				</div>
				<div className="col-md-4">
					<label htmlFor="client_email">Email</label>
					<input
						type="text"
						className="form-control"
						id="client_email"
						placeholder="johndoe@xxxx.xx"
						value={client_email}
						onChange={(e) => setValues({ ...values, client_email: e.target.value })}
						required
					/>

					<small id="emailHelp" className="form-text text-muted">
						This email will be used to generate an account for you.
					</small>
				</div>
				<div className="col-md-4">
					<label htmlFor="client_phone_number">Téléphone</label>
					<PhoneInput
						placeholder="Enter phone number"
						value={client_phone_number}
						className="form-control"
						onChange={(e) => setValues({ ...values, client_phone_number: e })}
					/>
				</div>
			</div>
		</form>
	);

	const paymentInformation = () => (
		<div className="mt-5">
			<h4 className="">How to pay me?</h4>
			<p className="">
				I split the payment into two. The first 50% is usually taken once you have seen the mockup of your home
				page and you’re happy to move forward. The following 50% is taken 2 days before the deadline we will
				fix.
			</p>
			<p className="mt-4">
				<strong>Payment method:</strong> Paypal, Wechat, Alipay or Credit Card
			</p>
		</div>
	);

	const packageInformation = () => (
		<div className="mt-5">
			<p className="text-center">
				Phewww!!! don't worry this is the final step. Here is more details of what you get from this package.
				Make sure you read carefully to avoid any misunderstanding. If you have any question please{' '}
				<a style={{ color: '#f56a6a' }} href="/#contact">
					contact me
				</a>
			</p>
			<div className="table-responsive">
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Features</th>
							<th scope="col">Availability</th>
							<th scope="col">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Design Customization</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								I design everything but you have the final word for how you want your website to look
								like. Everything will be customizable.
							</td>
						</tr>
						<tr>
							<td>Responsive Design</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								Your website will look amazing on multiple screen sizes (desktop, mobile and tablet).
							</td>
						</tr>
						<tr>
							<td>Source Code</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>The entire source code of your website will be delivered after the final payment.</td>
						</tr>
						<tr>
							<td>Custom functionalities</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								I give you the possibility to list out all the features you want me to implement on your
								website.
							</td>
						</tr>
						<tr>
							<td>Google Analytics</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								Google Analytics is included in this package to help you better track your website
								performance.
							</td>
						</tr>
						<tr>
							<td>Newsletter</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								I'll build the right tools so that you can communicate regularly with your subscribers.
							</td>
						</tr>
						<tr>
							<td>Contact Forms</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>Your visitors will be able to get in touch from within your website.</td>
						</tr>
						<tr>
							<td>Admin Dashboard</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								I'll build an admin dashboard so that you can have full control over your website's
								various functionalities and manage your data.
							</td>
						</tr>
						<tr>
							<td>Authentication</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>
								If necessary, I'll build a highly secure authentication system to allow multiple users
								to get access to restricted areas of your website.
							</td>
						</tr>
						<tr>
							<td>Database</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>All your data will be securely stored on our servers if needed.</td>
						</tr>
						<tr>
							<td>PayPal Payment</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>Paypal payment can be integrated with your website.</td>
						</tr>

						<tr>
							<td>Pro Email</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>The 1 year free pro email service is available for this package.</td>
						</tr>
						<tr>
							<td>Domain Name</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>I will setup a 1 year free domain name (.COM, .ORG, .FR, ...etc) for your website.</td>
						</tr>
						<tr>
							<td>SSL Certficate</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>I will secure your website by providing a 1 year free SSL Certificate.</td>
						</tr>
						<tr>
							<td>Hosting</td>
							<td>
								<CheckCircleIcon className="text-success" />
							</td>
							<td>I will freely host your website on one of my servers for 1 year.</td>
						</tr>
						<tr>
							<td>Number of Pages</td>
							<td />
							<td>Your website should not exceed 20 pages.</td>
						</tr>
						<tr>
							<td>Revisions</td>
							<td />
							<td>You can make up to unlimited modifications request.</td>
						</tr>
						<tr>
							<td>Delivery time</td>
							<td />
							<td>
								Your website should be up and ready for deployment within a month or more, depending on
								the complexity of the project.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleComplete = async () => {
		try {
			const res = await createOrder(values);
			console.log(res.data);

			setValues({
				...values,
				order_type: 'premium',
				business_description: '',
				current_website_description: '',
				project_description: '',
				features_description: '',
				audience_description: '',
				budget_and_deadline_description: '',
				// personal
				client_fullname: '',
				client_email: '',
				client_phone_number: ''
			});

			Router.push('/');
			toast.success(
				'Your order has been placed. I will review your submission and reach out to you as soon as possible. Thank you so much for trusting me for your project.'
			);
		} catch (err) {
			console.log(err);
			toast.error('Oops! Something went wrong. Make sure you to fill in all required fields');
		}
		setActiveStep(0);
	};

	return (
		<React.Fragment>
			<div className={classes.root} className="mb-5">
				<div className="container">
					<h4 className="text-center mt-4">Premium Package</h4>
				</div>
				<div className="container">
					<p className="text-center mt-4">
						Hi there! I’m so excited to get started working with you. To keep this project on track and
						accomplish all our goals, please help me get to know you, your business, and the project more
						thoroughly.
					</p>
					<div className="card text-center m-5 promotion_card">
						<div className="card-body">
							<p className="">
								<i className="ri-alert-fill" /> This package is for large businesses that needs
								enterprise level application with complex functionalities and expect very high traffic
								on website. Do you need a web based solution for a complex problem? If so, this package
								has got you covered.
							</p>
						</div>
					</div>
				</div>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div className="container">
					{activeStep === steps.length ? (
						<div>
							<div className={classes.instructions}>
								<p className="text-center mt-4">
									Thank you for reaching out! all this great information helps set achievable goals
									and clearly outline just what you’re looking for in a website. Your project will be
									reviewed and you'll quickly get contacted so we can move forward. Can’t wait to get
									started!
								</p>
							</div>
							<Button onClick={handleComplete} style={{ backgroundColor: '#000', color: '#fff' }}>
								Request Quotation
							</Button>
						</div>
					) : (
						<div>
							<div className={classes.instructions}>{getStepContent(activeStep)}</div>
							<div className="mt-5">
								<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
									Back
								</Button>
								<Button
									variant="contained"
									style={{ backgroundColor: '#000', color: '#fff' }}
									onClick={handleNext}
								>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default PremiumPlanOrderCompletion;
