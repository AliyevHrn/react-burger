import { getItemsApi } from '../../components/api/get-items-api';
import { v4 as uuidv4 } from 'uuid';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const CHANGE_INGREDIENT_POSITION = 'CHANGE_INGREDIENT_POSITION';

function getItemsRequest() {
	return {
		type: GET_ITEMS_REQUEST,
	}
}
function getItemsSuccess(data) {
	return {
		type: GET_ITEMS_SUCCESS,
		items: data
	}
}
function getItemsFailed() {
	return {
		type: GET_ITEMS_FAILED,
	}
}
export function addIngredient (itemId) {
	return {
		type: ADD_INGREDIENT,
		...itemId,
		uuid: uuidv4()
	}
}
export function addBun (itemId) {
	return {
		type: ADD_BUN,
		...itemId
	}
}
export function deleteIngredient(index) {
	return {
		type: DELETE_INGREDIENT,
		payload: index
	}
}
export function changeIngredientPosition(sortItems) {
	return {
		type: CHANGE_INGREDIENT_POSITION,
		payload: sortItems
	}
}

export function getItems() {
	return function (dispatch) {
		dispatch(getItemsRequest());
		getItemsApi()
			.then((res) => {
				if (res && res.success) {
					dispatch(getItemsSuccess(res.data));
				} else {
					dispatch(getItemsFailed());
				}
			})
			.catch((err) => {
				dispatch(getItemsFailed());
			});
	};
}
