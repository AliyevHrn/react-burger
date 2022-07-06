import React, { useEffect } from 'react';
import Styles from './tabs-content.module.css';
import PropTypes from 'prop-types';
import IngredientsItem from '../ingredients-item/ingredients-item';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../../../services/actions/ingredients';
import { OPEN_INGREDIENT } from '../../../../services/actions/ingredient-detail';


function Section(props) {
  return (
    <div className={Styles.section} id={props.id}>
      <h2 className="text text_type_main-medium mb-6">{props.title}</h2>
      <div className={Styles.list}>
        {props.children}
      </div>
    </div>
  )
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

function TabsContent(props) {


  const { items } = useSelector(store => ({
    items: store.ingredients.items
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])

  const openIngredientDetail = item => {
    dispatch({
      type: OPEN_INGREDIENT,
      ingredientData: item
    })
  }


  const buns = items.filter(item => item.type === 'bun');
  const sauces = items.filter(item => item.type === 'sauce');
  const mains = items.filter(item => item.type === 'main');

  return (
    <div className={`${Styles.scrollsection} mt-10`}>
        {buns.length &&
          <Section title={'Булки'} id={'buns'}>
            { buns.map((item, index) =>
              <IngredientsItem {...item} key={index} handleOpenModal={() => openIngredientDetail(item)}/>
            )}
          </Section>
        }
        {sauces.length &&
          <Section title={'Соусы'} id={'success'}>
          { sauces.map((item, index) =>
            <IngredientsItem {...item} key={index} handleOpenModal={() => openIngredientDetail(item)}/>
          )}
          </Section>
        }
        {mains.length &&
          <Section title={'Начинки'} id={'main'}>
          { mains.map((item, index) =>
            <IngredientsItem {...item} key={index} handleOpenModal={() => openIngredientDetail(item)}/>
          )}
          </Section>
        }
    </div>
  )
}
TabsContent.propTypes = {
  handleOpenModal: PropTypes.func
}

export default TabsContent;
