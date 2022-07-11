export const OPEN_INGREDIENT = 'OPEN_INGREDIENT';
export const CLOSE_INGREDIENT = 'CLOSE_INGREDIENT';

export function openIngredient(item) {
	return {
		type: OPEN_INGREDIENT,
		payload: item,
	};
}
export function closeIngredient() {
	return {
		type: CLOSE_INGREDIENT,
	};
}
