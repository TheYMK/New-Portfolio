import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BasicPlanOrderCompletion from '../../components/order/BasicPlanOrderCompletion';
import StandardPlanOrderCompletion from '../../components/order/StandardPlanOrderCompletion';
import PremiumPlanOrderCompletion from '../../components/order/PremiumPlanOrderCompletion';
import UltimatePlanOrderCompletion from '../../components/order/UltimatePlanOrderCompletion';
import { toast } from 'react-toastify';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Head from 'next/head';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const OrderCompletionPage = ({ router }) => {
	const [ plan, setPlan ] = useState('');
	const { user, order_type } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			if (order_type === '') {
				Router.push('/');
				toast.error("You haven't selected any plan yet!");
			}
		},
		[ order_type ]
	);

	const head = () => (
		<Head>
			<title>Kaym Kassai | Order completion</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta name="description" content="" />
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={``} />
			<meta property="og:description" content="" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="Kaym Kassai" />
			<meta property="og:image" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/img/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout headerStyle="" headerActiveLink="">
				<MessengerCustomerChat
					pageId="100162721696650"
					appId={`${FB_APP_ID}`}
					themeColor="#f56a6a"
					loggedInGreeting="Hi! How can I help you?"
					loggedOutGreeting="Hi! How can I help you?"
					shouldShowDialog={false}
				/>
				<Breadcrumbs pageTitle="Order Completion" />
				<main id="main">
					{order_type === '' && (
						<h1>
							You haven't selected any plan yet. Make sure you select one before accessing this page. If
							you've already done so, please try again.
						</h1>
					)}
					{order_type === 'basic' && <BasicPlanOrderCompletion />}
					{order_type === 'standard' && <StandardPlanOrderCompletion />}
					{order_type === 'premium' && <PremiumPlanOrderCompletion />}
					{order_type === 'ultimate' && <UltimatePlanOrderCompletion />}
				</main>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(OrderCompletionPage);
