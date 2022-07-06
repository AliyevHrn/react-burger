import { getItemsRequest } from '../../components/api/get-items-api';
export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const CHANGE_INGREDIENT_POSITION = 'CHANGE_INGREDIENT_POSITION';

export function getItems() {
	return function (dispatch) {
		dispatch({
			type: GET_ITEMS_REQUEST,
		});
		getItemsRequest()
			.then((res) => {
				if (res && res.success) {
					dispatch({
						type: GET_ITEMS_SUCCESS,
						items: res.data,
					});
				} else {
					dispatch({
						type: GET_ITEMS_FAILED,
					});
				}
			})
			.catch((err) => {
				dispatch({
					type: GET_ITEMS_FAILED,
				});
			});
	};
}
