import axios from 'axios';
import { API_URL } from '../config';

export const createOrder = async (order) => {
	return await axios.post(`${API_URL}/order`, order);
};
