import React, { useEffect, useState } from 'react';
import { getOrders } from '../../actions/order';
import moment from 'moment';
import slugify from 'slugify';
import Router from 'next/router';

const ManageOrders = () => {
	const [ orders, setOrders ] = useState([]);
	const [ reload, setReload ] = useState(false);

	useEffect(
		() => {
			fetchOrders();
		},
		[ reload ]
	);

	const fetchOrders = () => {
		getOrders()
			.then((res) => {
				setOrders(res.data);
			})
			.catch((err) => {
				console.log(err);
				toast.error(`Failed to fetch all orders`);
			});
	};

	const accessOrderDetail = (id) => {
		Router.push(`/admin/order-detail/${id}`);
	};

	const showOders = () => (
		<div className="table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Client Name</th>
						<th scope="col">Client Email</th>
						<th scope="col">Client Phone Number</th>
						<th scope="col">Package Type</th>
						<th scope="col">Status</th>
						<th scope="col">Start Date</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((o, i) => (
						<tr key={o._id}>
							<th scope="row">{i + 1}</th>

							<td>{o.client_fullname}</td>
							<td>{o.client_email}</td>
							<td>{o.client_phone_number}</td>
							<td>{o.order_type.toUpperCase()}</td>
							<td>{o.order_status}</td>
							<td>{moment(o.createdAt).fromNow()}</td>

							<td>
								<button
									className="badge bg-info btn text-white"
									onClick={() => accessOrderDetail(o._id)}
								>
									Access
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	return <div>{showOders()}</div>;
};

export default ManageOrders;
