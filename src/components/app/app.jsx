import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import IngredientDetail from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
import Modal from '../modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_INGREDIENT } from '../../services/actions/ingredient-detail';
import { CLOSE_ORDER } from '../../services/actions/order-request';


function App() {


	const { isShowed } = useSelector(store => {
		return store.ingredient;
	})
	const { orderShowed, orderNumber } = useSelector(store => {
		return store.order;
	})

	const dispatch = useDispatch();

	const closeIngredientModal = () => {
		dispatch({
			type: CLOSE_INGREDIENT,
		})
	}
	const closeeOrderModal = () => {
		dispatch({
			type: CLOSE_ORDER,
		})
	}

	return (
		<>
			<AppHeader />
			<main className="pl-5 pr-5 mt-10">
					<Constructor/>
			</main>
			<Modal onClose={closeIngredientModal} header={'Детали ингредиента'} state={isShowed}>
				<IngredientDetail />
			</Modal>
			<Modal onClose={closeeOrderModal} state={orderShowed}>
				<OrderDetails id={orderNumber}/>
			</Modal>
		</>
	);

}

export default App;
