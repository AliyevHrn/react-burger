import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import IngredientDetail from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
import Modal from '../modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeIngredient } from '../../services/actions/ingredient-detail';
import { closeOrder } from '../../services/actions/order-request';


function App() {


	const { ingredientShowed } = useSelector(store => {
		return store.ingredient;
	})
	const { orderShowed, orderNumber } = useSelector(store => {
		return store.order;
	})

	const dispatch = useDispatch();

	const closeIngredientModal = () => {
		dispatch(closeIngredient());
	}
	const closeOrderModal = () => {
		dispatch(closeOrder());
	}

	return (
		<>
			<AppHeader />
			<main className="pl-5 pr-5 mt-10">
				<Constructor/>
			</main>		
			<Modal onClose={closeIngredientModal} header={'Детали ингредиента'} state={ingredientShowed}>
				<IngredientDetail />
			</Modal>
			<Modal onClose={closeOrderModal} state={orderShowed}>
				<OrderDetails id={orderNumber}/>
			</Modal>
		</>
	);

}

export default App;
