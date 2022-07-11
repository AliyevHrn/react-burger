import React, { useMemo } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Styles from './ingredients-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { openIngredient } from '../../../../services/actions/ingredient-detail';
import { ingredientType } from '../../../../utils/types';

function IngredientsItem({ data, _id, type, image, name, price }) {

  const { constructorItems } = useSelector(store => ({
    constructorItems: store.ingredients
  }));

  const ingredientCounter = useMemo(() => {
    let counter = 0;
    constructorItems.constructorItems.forEach((ingredient) => {
      if (ingredient._id === _id) counter++;
    });
    if (constructorItems.bun._id === _id) counter++;
    return counter;
  }, [constructorItems]);


  const [{isDrag}, dragRef] = useDrag({
    type: type,
    item: { _id },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });


  const dispatch = useDispatch();
  const openIngredientDetail = item => {
    dispatch(openIngredient(item))
  }


  return (
    !isDrag &&
    <div className={Styles.item}>
      <div onClickCapture={() => openIngredientDetail(data)} ref={dragRef}>
        {ingredientCounter > 0 &&
          <span className={Styles.counter}>{ingredientCounter}</span>
        }
        <div className={Styles.image}>
          <img src={image} alt={name} />
        </div>
        <h3 className={`${Styles.price} text text_type_digits-default mt-1 mb-1`}>
          {price}
          <CurrencyIcon type="primary" />
        </h3>
        <p className={`${Styles.name} text text_type_main-default`}>{name}</p>
      </div>
    </div>
  )
}

IngredientsItem.propTypes = ingredientType;

export default IngredientsItem;
