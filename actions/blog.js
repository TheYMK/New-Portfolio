import axios from 'axios';
import { API_URL } from '../config';

export const createBlog = async (blog, authtoken) => {
	let endpoint = `${API_URL}/blog`;

	return await axios.post(endpoint, blog, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getBlogs = async () => {
	return await axios.get(`${API_URL}/blogs`);
};

export const getTotalBlogCount = async () => {
	return await axios.get(`${API_URL}/blogs/total`);
};
