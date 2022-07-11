import React, { useEffect, forwardRef } from 'react';
import Styles from './tabs-content.module.css';
import PropTypes from 'prop-types';
import IngredientsItem from '../ingredients-item/ingredients-item';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../../../services/actions/ingredients';



const Section = forwardRef((props, ref) => {
  return (
    <div className={Styles.section} id={props.id} ref={ref}>
      <h2 className="text text_type_main-medium mb-6">{props.title}</h2>
      <div className={Styles.list}>
        {props.children}
      </div>
    </div>
  )
});
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}


function TabsContent (props) {

  const { items } = useSelector(store => ({
    items: store.ingredients.items
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])


  const buns = items.filter(item => item.type === 'bun');
  const sauces = items.filter(item => item.type === 'sauce');
  const mains = items.filter(item => item.type === 'main');

  return (
    <div className={`${Styles.scrollsection} mt-10`}>
        {buns.length &&
          <Section title={'Булки'} id={'buns'} ref={props.bunsRef}>
            { buns.map((item, index) =>
              <IngredientsItem {...item} key={index} data={item}/>
            )}
          </Section>
        }
        {sauces.length &&
          <Section title={'Соусы'} id={'success'} ref={props.saucesRef}>
          { sauces.map((item, index) =>
            <IngredientsItem {...item} key={index} data={item}/>
          )}
          </Section>
        }
        {mains.length &&
          <Section title={'Начинки'} id={'main'} ref={props.mainsRef}>
          { mains.map((item, index) =>
            <IngredientsItem {...item} key={index} data={item}/>
          )}
          </Section>
        }
    </div>
  )
};


export default TabsContent;
