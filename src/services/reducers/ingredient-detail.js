import {
	OPEN_INGREDIENT,
	CLOSE_INGREDIENT,
} from '../actions/ingredient-detail';

const initialState = {
	ingredientData: {},
	ingredientShowed: false,
	isShowed: false,
};

export const modalIngredientReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_INGREDIENT: {
			return {
				...state,
				ingredientData: action.payload,
				ingredientShowed: true,
				isShowed: true,
			};
		}
		case CLOSE_INGREDIENT: {
			return {
				...state,
				ingredientData: {},
				ingredientShowed: false,
				isShowed: false,
			};
		}
		default:
			return state;
	}
};
