import React from 'react';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import BurgerIngredients from '../constructor/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../constructor/burger-constructor/burger-constructor';
import IngredientDetail from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from '../constructor/constructor-item/constructor-item';
import TotalPrice from '../constructor/total-price/total-price';

import Modal from '../modal/modal';

function App() {

	const url = 'https://norma.nomoreparties.space/api/ingredients';

	const [state, setState] = React.useState({
		isLoading: false,
		hasError: false,
		data: [],
	});
	const [modalState, setModalState] = React.useState({
		visibility: 'hidden',
		name: '',
		data: [],
	});

	const getData = () => {
		setState({ ...state, hasError: false, isLoading: true });
		fetch(url)
			.then((res) => res.json())
			.then((data) => setState({ ...state, data: data.data, isLoading: false }))
			.catch((e) => {
				setState({ ...state, hasError: true, isLoading: false });
			});
	};

	const handleCloseModal = () => {
		setModalState({...modalState, visibility: 'hidden'});
	}
	const handleOpenModal = (name, data) => {
		setModalState({...modalState, visibility: 'shown', name: name, data: data});
	}

	React.useEffect(() => {
		getData();
		document.addEventListener('keydown', handleCloseModal);

		return (() => {
			document.removeEventListener('keydown', handleCloseModal);
		})
	}, []);

	const { data, isLoading, hasError } = state;
	return (
		<>
			<AppHeader />
			<main className="pl-5 pr-5 mt-10">
				{isLoading && 'Загрузка...'}
				{hasError && 'Произошла ошибка'}
				{!isLoading && !hasError && data.length &&
				 	<Constructor data={data}>
						 	<BurgerIngredients data={data} />
							<div className="constructor">
								<BurgerConstructor>
									{data.map((item, index) =>
										<ConstructorItem {...item} key={index} handleOpenModal={() => handleOpenModal('ingredients', item)}/>
									)}
								</BurgerConstructor>
								<div className="mt-10 mb-10"
										 style={{display: 'flex', justifyContent: 'flex-end'}}>
									<TotalPrice totalPrice='6545'/>
									<Button type="primary" size="large" onClick={() => handleOpenModal('order')}>
											Оформить заказ
									</Button>
								</div>
							</div>
					</Constructor>
				}
			</main>
			{modalState.visibility === 'shown' &&
				<>
					<Modal state={modalState.name === 'ingredients' ? modalState.visibility : ''} onClose={handleCloseModal} header={'Детали ингредиента'}>
						<IngredientDetail {...modalState.data} />
					</Modal>
					<Modal state={modalState.name === 'order' ? modalState.visibility : ''} onClose={handleCloseModal}>
						<OrderDetails/>
					</Modal>
				</>
			}
		</>
	);
}

export default App;
