import React, { useEffect, useMemo } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from './constructor-item/constructor-item';
import TotalPrice from '../total-price/total-price';
import OrderCheckout from '../order-checkout/order-checkout';
import Styles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../../services/actions/ingredients';
import { useDrop } from 'react-dnd';
import { addIngredient, addBun } from '../../../services/actions/ingredients';

function BurgerConstructor() {

  const { bun } = useSelector(store => ({
    bun: store.ingredients.bun,
  }));
  const { constructorItems } = useSelector(store => ({
    constructorItems: store.ingredients.constructorItems
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])


  const [{ isHoverConstructor }, ingredientsTarget] = useDrop({
    accept: ['sauce', 'main'],
    collect: monitor => ({
      isHoverConstructor: monitor.isOver()
    }),
    drop(item) {
      dispatch(addIngredient(item));
    },
  });

  const [{ isHoverBun }, bunTarget] = useDrop({
    accept: 'bun',
    collect: monitor => ({
      isHoverBun: monitor.isOver()
    }),
    drop(item) {
      dispatch(addBun(item));
    },
  });


  return (
      <div className={Styles.constructor}>
        <div className="constructor-items pl-4">
          <div className="mb-4 pl-8" ref={bunTarget}>
              {bun.name ?
                <ConstructorElement
                  type={'top'}
                  text={bun.name}
                  price={bun.price}
                  thumbnail={bun.image}
                  isLocked={true}
                />
              :
                <div className={` ${Styles.emptyBunTop} ${isHoverBun ? Styles.bunHover : ''}`}>
                  {!isHoverBun &&
                    <p>Перетащите булку</p>
                  }
                </div>
              }
          </div>
          <div className={Styles.scrollsection} ref={ingredientsTarget}>
            {constructorItems.length > 0 ?
              constructorItems.map((item, index) => {
                return (
                  <ConstructorItem
                  {...item}
                  key={item.uuid}
                  index={index}
                  />
                )
              })
              :
              <div className={`${Styles.emptyConstructor} ${isHoverConstructor ? Styles.scrollSectionHover : ''} ml-8`}>
                {!isHoverConstructor &&
                  <p>Перетащите ингредиенты</p>
                }
              </div>
            }
          </div>
          <div className="mt-4 pl-8">
            {bun.name ?
                <ConstructorElement
                  type={'bottom'}
                  text={bun.name}
                  price={bun.price}
                  thumbnail={bun.image}
                  isLocked={true}
                />
              :
                <div className={` ${Styles.emptyBunBottom} ${isHoverBun ? Styles.bunHover : ''}`}>
                  {!isHoverBun &&
                    <p>Перетащите булку</p>
                  }
                </div>
              }
          </div>
        </div>
        <div className={`${Styles.totalBlock} mt-10 mb-10 pr-10`}>
          <TotalPrice/>
          <OrderCheckout/>
        </div>
      </div>
  )
}

export default BurgerConstructor;
