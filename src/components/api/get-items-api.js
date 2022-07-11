import { BASE_URL } from './api';
import checkResponse from '../../utils/check-response.js';

export const getItemsApi = async () => {
	return await fetch(`${BASE_URL}/ingredients`).then(checkResponse);
};
