import { BASE_URL } from './api';

export const sendRequest = async (data) => {
	return await fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({
			ingredients: data,
		}),
	})
		.then((res) => res.json())
		.catch((err) => {
			throw new Error(err);
		});
};
