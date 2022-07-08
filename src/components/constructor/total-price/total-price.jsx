import React from 'react';
import Styles from './total-price.module.css';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function TotalPrice() {

  const constructorItems = useSelector(store => store.ingredients);

  const bunsPrice = constructorItems.bun.price ? constructorItems.bun.price * 2 : 0;

  const totalPrice = bunsPrice + constructorItems.constructorItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`${Styles.totalPrice} mr-10`}>
      <p className="text_type_digits-medium">
        {totalPrice}
      </p>
      <div className={Styles.cyrrencyIcon}>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  )
}
export default TotalPrice;
