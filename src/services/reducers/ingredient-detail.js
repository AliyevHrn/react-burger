import {
	OPEN_INGREDIENT,
	CLOSE_INGREDIENT,
} from '../actions/ingredient-detail';

const initialState = {
	ingredientData: {},
	isShowed: false,
};

export const modalIngredientReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_INGREDIENT: {
			return {
				...state,
				ingredientData: action.ingredientData,
				isShowed: true,
			};
		}
		case CLOSE_INGREDIENT: {
			return {
				...state,
				ingredientData: {},
				isShowed: false,
			};
		}
		default:
			return state;
	}
};
