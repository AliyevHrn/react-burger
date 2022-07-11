import { sendRequest } from '../../components/api/order-request-api';
export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const CLOSE_ORDER = 'CLOSE_ORDER'; 

function sendOrderRequest() {
	return {
		type: SEND_ORDER_REQUEST
	}
}
function sendOrderSuccess(orderNumber) {
	return {
		type: SEND_ORDER_SUCCESS,
		payload: orderNumber
	}
}
function sendOrderFailed() {
	return {
		type: SEND_ORDER_FAILED
	}
}
export function closeOrder() {
	return {
		type: CLOSE_ORDER
	}
}

export function sendNewRequest(data) {
	return function (dispatch) {
		dispatch(sendOrderRequest());
		sendRequest(data)
			.then((res) => {
				if (res && res.success) {
					dispatch(sendOrderSuccess(res.order.number));
				} else {
					dispatch(sendOrderFailed());
				}
			})
			.catch((err) => {
				dispatch(sendOrderFailed());
			})
	}
}

