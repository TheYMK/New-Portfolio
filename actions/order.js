import axios from 'axios';
import { API_URL } from '../config';

export const createOrder = async (order) => {
	return await axios.post(`${API_URL}/order`, order);
};

export const getOrders = async () => {
	return await axios.get(`${API_URL}/orders`);
};

export const getSingleOrder = async (id) => {
	return await axios.get(`${API_URL}/order/${id}`);
};

export const updateOrderStatus = async (id, order_status, authtoken) => {
	return await axios.put(
		`${API_URL}/order/${id}/update-status`,
		{ order_status },
		{
			headers: {
				authtoken
			}
		}
	);
};

export const updateOrderPrice = async (id, order_price, authtoken) => {
	return await axios.put(
		`${API_URL}/order/${id}/update-price`,
		{ order_price },
		{
			headers: {
				authtoken
			}
		}
	);
};

export const removeOrder = async (id, authtoken) => {
	return await axios.delete(`${API_URL}/order/${id}`, {
		headers: {
			authtoken
		}
	});
};

export const getTotalOrderCount = async () => {
	return await axios.get(`${API_URL}/orders/total`);
};
