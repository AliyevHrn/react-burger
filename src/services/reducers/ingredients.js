import {
	GET_ITEMS_FAILED,
	GET_ITEMS_REQUEST,
	GET_ITEMS_SUCCESS,
	ADD_INGREDIENT,
	ADD_BUN,
	DELETE_INGREDIENT,
	CHANGE_INGREDIENT_POSITION,
} from '../actions/ingredients';

const initialState = {
	items: [],
	itemsRequest: false,
	itemsFailed: false,
	constructorItems: [],
	bun: {},
};

export const ingredientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ITEMS_REQUEST: {
			return {
				...state,
				itemsRequest: true,
			};
		}
		case GET_ITEMS_SUCCESS: {
			return {
				...state,
				itemsFailed: false,
				items: action.items,
				itemsRequest: false,
			};
		}
		case GET_ITEMS_FAILED: {
			return {
				...state,
				itemsFailed: true,
				itemsRequest: false,
			};
		}
		case ADD_INGREDIENT: {
			return {
				...state,
				constructorItems: [...state.constructorItems, action.item],
			};
		}
		case ADD_BUN: {
			return {
				...state,
				bun: action.bun,
			};
		}
		case DELETE_INGREDIENT: {
			return {
				...state,
				constructorItems: [
					...state.constructorItems.filter(
						(item, index) => index !== action.payload
					),
				],
			};
		}
		case CHANGE_INGREDIENT_POSITION: {
			return {
				...state,
				constructorItems: [...action.payload],
			};
		}
		default: {
			return state;
		}
	}
};
