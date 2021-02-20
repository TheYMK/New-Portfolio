import React, { useEffect, useState } from 'react';
import { getSingleOrder, updateOrderStatus, updateOrderPrice, removeOrder } from '../../../actions/order';
import Admin from '../../../components/auth/Admin';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../../components/Layout';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from '../../../components/order/Invoice';
import LoadingToRedirect from '../../../components/LoadingToRedirect';

const OrderDetailPage = ({ params }) => {
	const [ order, setOrder ] = useState({});
	const [ order_price, setOrderPrice ] = useState('');

	// const [ order_status, setOrderStatus ] = useState('');
	const [ allStatus, setAllStatus ] = useState([
		'In Review',
		'Approved',
		'Processing',
		'On Hold',
		'Cancelled',
		'Completed'
	]);
	const { user } = useSelector((state) => ({ ...state }));
	const [ reload, setReload ] = useState(false);

	useEffect(
		() => {
			fetchOrder();
		},
		[ reload ]
	);

	const fetchOrder = async () => {
		try {
			const res = await getSingleOrder(params.id);
			setOrder(res.data);
			setOrderPrice(res.data.order_price);
		} catch (err) {
			toast.error('Failed to load order data');
		}
	};

	const showOrderDetails = () => (
		<React.Fragment>
			<div className="mt-5">
				<h4>What to know about this project?</h4>
			</div>

			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>Q: Logo Design?</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.logo_description.length > 0 ? order.logo_description : 'No answer'}
				</p>
			</div>

			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>Q: Business Card Design?</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.businesscard_description.length > 0 ? order.businesscard_description : 'No answer'}
				</p>
			</div>

			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>
					Q: Do you want a business website? If yes, describe your business. If no, describe what your website
					is (will be) about.
				</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.business_description.length > 0 ? order.business_description : 'No answer'}
				</p>
			</div>
			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>Q: Do you currently have a website?</p>
				<p>
					<span style={{ fontWeight: '700' }}>A: </span>{' '}
					{order.current_website_description.length > 0 ? order.current_website_description : 'No answer'}
				</p>
			</div>
			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>
					Q: What are your goals for this project? What will define this project as successful?
				</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.project_description.length > 0 ? order.project_description : 'No answer'}
				</p>
			</div>
			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>
					Q: Is there anything in particular you want on your site? Describe all the features you want your
					website to have. (You have a maximum of 3 custom features)
				</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.features_description.length > 0 ? order.features_description : 'No answer'}
				</p>
			</div>
			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>
					Q: Who is your target audience? What information does your audience need to know from your website?
				</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.audience_description.length > 0 ? order.audience_description : 'No answer'}
				</p>
			</div>
			<div className="mt-3">
				<p style={{ fontWeight: '700' }}>Q: What’s your deadline and budget? How flexible are they?</p>
				<p>
					<span style={{ fontWeight: '700' }}>A:</span>{' '}
					{order.budget_and_deadline_description.length > 0 ? (
						order.budget_and_deadline_description
					) : (
						'No answer'
					)}
				</p>
			</div>
		</React.Fragment>
	);

	const showClientInfo = () => (
		<div className="card mt-5">
			<div className="card-body">
				<div className="row">
					<div className="col-md-4">
						<p>
							<strong>Clients' Name:</strong> {order.client_fullname}
						</p>
						<p>
							<strong>Clients' Email:</strong> {order.client_email}
						</p>
						<p>
							<strong>Clients' Phone Number:</strong> {order.client_phone_number}
						</p>
					</div>
					<div className="col-md-4">
						<p>
							<strong>Starting Date:</strong> {moment(order.createdAt).fromNow()}
						</p>
						<p>
							<strong>Expected End:</strong> {order.order_type === 'basic' && '5 to 7 days'}{' '}
							{order.order_type === 'standard' && '15 to 20 days'}
							{order.order_type === 'premium' && '1 month or more'}
							{order.order_type === 'ultimate' && 'undefined'}
						</p>
						<p>
							<strong>Order Status:</strong>{' '}
							<span style={{ color: '#f56a6a' }}>{order.order_status}</span>
						</p>
					</div>
					<div className="col-md-4">
						{/* <form>
							<div className="form-group">
								<label for="project_price">Set Project Price</label>
								<input
									type="number"
									className="form-control"
									id="project_price"
									value={project_price}
									onChange={(e) => setProjectPrice(e.target.value)}
								/>
								<small id="emailHelp" className="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
						</form> */}
						<form>
							<div className="form-group">
								<label htmlFor="order_status">Update order status</label>
								<select
									name="order_status"
									id="order_status"
									className="form-control"
									value={order.order_status}
									onChange={(e) => handleStatusChange(e)}
								>
									<option value="">Select a status</option>
									{allStatus.map((s, i) => (
										<option key={i} value={s}>
											{s}
										</option>
									))}
								</select>
							</div>
						</form>
						<form>
							<div className="form-group">
								<label htmlFor="order_price">Update estimated price ($)</label>
								<input
									type="number"
									id="order_price"
									className="form-control"
									style={{ width: '30%' }}
									value={order_price}
									onChange={(e) => setOrderPrice(e.target.value)}
								/>
								<button className="btn btn-dark mt-3" onClick={(e) => handleUpdatePrice(e)}>
									Update
								</button>
							</div>
						</form>
						<div>
							<button className="btn btn-danger float-right" onClick={handleRemoveOrder}>
								Remove Order
							</button>
							<button className="btn btn-info float-right mr-3" onClick={handleAccountSetup}>
								Setup Account
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const handleStatusChange = async (e) => {
		try {
			const res = await updateOrderStatus(order._id, e.target.value, user.token);
			// console.log(res.data);
			toast.success('Status has been updated!');
			setReload(!reload);
		} catch (err) {
			toast.error('Failed to update order status!');
		}
	};

	const handleUpdatePrice = async (e) => {
		e.preventDefault();
		try {
			const res = await updateOrderPrice(order._id, order_price, user.token);
			toast.success('Estimated price has been updated!');
			setReload(!reload);
		} catch (err) {
			toast.error('Failed to update estimated price!');
		}
	};

	const handleRemoveOrder = async () => {
		try {
			const res = await removeOrder(order._id, user.token);
			toast.success('Order has been removed!');
			Router.push('/admin/dashboard');
		} catch (err) {
			toast.error('Failed to remove this order!');
		}
	};

	const showDownloadPDFLink = (order) => (
		<PDFDownloadLink
			document={<Invoice order={order} />}
			fileName="invoice.pdf"
			className="btn btn-sm btn-danger btn-raised"
		>
			Download Invoice (PDF)
		</PDFDownloadLink>
	);

	const handleAccountSetup = async () => {
		try {
		} catch (err) {
			toast.error('Failed to setup account');
		}
	};

	if (Object.keys(order).length === 0 && order.constructor === Object) {
		return <LoadingToRedirect />;
	}

	return (
		<Layout headerStyle="" headerActiveLink="">
			<Admin>
				<main id="main">
					<Breadcrumbs pageTitle="Order Detail" />
					<section className="inner-page">
						<div className="container">
							<div>
								<h5>
									Package Type:{' '}
									<span style={{ color: '#f56a6a', fontWeight: '700' }}>
										{order.order_type && order.order_type.toUpperCase()}
									</span>
									<span className="float-right">
										Estimated Price: <span className="text-success">${order.order_price}</span>
									</span>
								</h5>
							</div>

							{/* <div className="text-center">{order.client_fullname && showDownloadPDFLink(order)}</div> */}

							{order.client_fullname && showClientInfo()}

							{order.client_fullname && showOrderDetails()}
						</div>
					</section>
				</main>
			</Admin>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	return {
		props: {
			params
		}
	};
}

export default OrderDetailPage;
