import { BASE_URL } from './api';
import checkResponse from '../../utils/check-response.js';

export const sendRequest = async (data) => {
	return await fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			ingredients: data,
		}),
	}).then(checkResponse);
};
