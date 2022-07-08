import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { sendNewRequest } from '../../../services/actions/order-request';


function OrderCheckout() {

  const { items } = useSelector(store => ({
    items: store.ingredients.items,
  }));

  const dispatch = useDispatch();

  const ingredientIds = items.map(item => item._id);

  const confirmOrder = () => {
    dispatch(sendNewRequest(ingredientIds));
  };

  return (
    <Button type="primary" size="large" onClick={confirmOrder}>
      Оформить заказ
    </Button>
  )
}
export default OrderCheckout;
