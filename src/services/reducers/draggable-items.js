import {
	ADD_CONSTRUCTOR_ITEM,
	DELETE_CONSTRUCTOR_ITEM,
} from '../actions/draggable-items';

const initialState = {
	constructorItems: [],
};

export const constructorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONSTRUCTOR_ITEM: {
			return {
				...state,
				constructorItems: [
					...state.constructorItems,
					...state.ingredients.filter((item) => item.id === action.id),
				],
			};
		}
		case DELETE_CONSTRUCTOR_ITEM: {
			return {
				...state,
				constructorItems: [...state.constructorItems].filter(
					(item) => item.id !== action.id
				),
			};
		}
		default:
			return state;
	}
};
