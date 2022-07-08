import { BASE_URL } from './api';

export const getItemsRequest = async () => {
	return await fetch(`${BASE_URL}/ingredients`)
		.then((res) => res.json())
		.catch((err) => {
			throw new Error(err);
		});
};
