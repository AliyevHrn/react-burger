import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { sendNewRequest } from '../../../services/actions/order-request';


function OrderCheckout() {

  const { bun } = useSelector(store => ({
    bun: store.ingredients.bun,
  }))
  const { constructorItems } = useSelector(store => ({
    constructorItems: store.ingredients.constructorItems,
  }))

  const dispatch = useDispatch();

  let ingredientIds = [bun._id];
  constructorItems.map(item => {
    ingredientIds.push(item._id);
  });

  const confirmOrder = () => {
    if(Object.keys(bun).length > 0) {
      dispatch(sendNewRequest(ingredientIds));
    } else {
      return false;
    }
    dispatch(sendNewRequest(ingredientIds));
  };

  return (
    <Button type="primary" size="large" onClick={confirmOrder}>
      Оформить заказ
    </Button>
  )
}
export default OrderCheckout;
