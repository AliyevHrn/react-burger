import React, { useMemo } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Styles from './ingredients-item.module.css';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

function IngredientsItem({ _id, type, handleOpenModal, image, name, price }) {

  const { constructorItems } = useSelector(store => ({
    constructorItems: store.ingredients.constructorItems
  }));

  const ingredientCounter = useMemo(() => {
    let counter = 0;
    constructorItems.forEach((ingredient) => {
      if (ingredient._id === _id) counter++;
    });
    return counter;
  }, [constructorItems]);


  const [{isDrag}, dragRef] = useDrag({
    type: type,
    item: { _id },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });


  return (
    !isDrag &&
    <div className={Styles.item}>
      <div onClickCapture={handleOpenModal} ref={dragRef}>
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

IngredientsItem.propTypes= {
  handleOpenModal: PropTypes.func,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
export default IngredientsItem;
