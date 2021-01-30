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

const OrderCompletionPage = () => {
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
	return (
		<React.Fragment>
			<Layout headerStyle="" headerActiveLink="">
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

export default OrderCompletionPage;
