import {
	SEND_ORDER_REQUEST,
	SEND_ORDER_SUCCESS,
	SEND_ORDER_FAILED,
	CLOSE_ORDER,
} from '../actions/order-request';

const initialState = {
	orderNumber: null,
	orderRequest: false,
	orderFailed: false,
	orderShowed: false,
};

export const orderRequestReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_ORDER_REQUEST: {
			return {
				...state,
				orderRequest: true,
			};
		}
		case SEND_ORDER_SUCCESS: {
			return {
				...state,
				orderRequest: false,
				orderNumber: action.payload,
				orderFailed: false,
				orderShowed: true,
			};
		}
		case SEND_ORDER_FAILED: {
			return {
				...state,
				orderRequest: false,
				orderFailed: true,
			};
		}
		case CLOSE_ORDER: {
			return {
				...state,
				orderShowed: false,
				orderNumber: null,
			};
		}
		default:
			return state;
	}
};
