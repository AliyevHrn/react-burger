import React from 'react';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import BurgerIngredients from '../constructor/burger-ingredients/burger-ingredients';
import TabsContent from '../constructor/burger-ingredients/tabs-content/tabs-content';
import BurgerConstructor from '../constructor/burger-constructor/burger-constructor';
import IngredientDetail from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
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
		document.body.style.overflow = 'unset';
	}
	const closeModalByEscape = (e) => {
		if(e.key === 'Escape') {
			setModalState({...modalState, visibility: 'hidden'});
			document.body.style.overflow = 'unset';
		}
	}
	const handleOpenModal = (name, data) => {
		setModalState({...modalState, visibility: 'shown', name: name, data: data});
		document.body.style.overflow = 'hidden';
	}

	React.useEffect(() => {
		getData();
		document.addEventListener('keydown', closeModalByEscape);

		return (() => {
			document.removeEventListener('keydown', closeModalByEscape);
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
				 	<Constructor>
						<BurgerIngredients>
							<TabsContent data={data} handleOpenModal={handleOpenModal}/>
						</BurgerIngredients>
						<BurgerConstructor data={data} handleOpenModal={handleOpenModal}/>
					</Constructor>
				}
			</main>
			{modalState.visibility === 'shown' &&
				<>
					<Modal state={modalState.name === 'ingredients' ? modalState.visibility : ''} onClose={handleCloseModal} header={'Детали ингредиента'}>
						<IngredientDetail {...modalState.data} />
					</Modal>
					<Modal state={modalState.name === 'order' ? modalState.visibility : ''} onClose={handleCloseModal}>
						<OrderDetails id='535353'/>
					</Modal>
				</>
			}
		</>
	);
}

export default App;
