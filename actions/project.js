import axios from 'axios';
import { API_URL } from '../config';

export const createProject = async (project, authtoken) => {
	return await axios.post(`${API_URL}/project`, project, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getProjects = async () => {
	return await axios.get(`${API_URL}/projects/all`);
};

export const removeProject = async (slug, authtoken) => {
	return await axios.delete(`${API_URL}/project/${slug}`, {
		headers: {
			authtoken
		}
	});
};

export const getSingleProject = async (slug) => {
	return await axios.get(`${API_URL}/project/${slug}`);
};

export const updateProject = async (slug, project, authtoken) => {
	return await axios.put(`${API_URL}/project/${slug}`, project, {
		headers: {
			authtoken
		}
	});
};
