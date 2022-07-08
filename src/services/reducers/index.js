import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { modalIngredientReducer } from './ingredient-detail';
import { orderRequestReducer } from './order-request';

export const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	ingredient: modalIngredientReducer,
	order: orderRequestReducer,
});
