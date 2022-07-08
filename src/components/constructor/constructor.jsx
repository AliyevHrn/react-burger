import React from 'react';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import BurgerConstructor from './burger-constructor/burger-constructor';
import Styles from './constructor.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Constructor() {

  return (
    <>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <div className={Styles.wrapper}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </div>
    </>
  );
}
export default Constructor;
