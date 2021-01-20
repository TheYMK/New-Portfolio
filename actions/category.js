import axios from 'axios';
import { API_URL } from '../config';

export const createCategory = async (category, authtoken) => {
	return await axios.post(`${API_URL}/category`, category, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getCategories = async () => {
	return await axios.get(`${API_URL}/categories`);
};

export const removeCategory = async (slug, authtoken) => {
	return await axios.delete(`${API_URL}/category/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};
