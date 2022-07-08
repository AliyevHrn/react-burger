import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Styles from './tabs-list.module.css';


function TabsList(props) {

  return (
    <div className={Styles.tabs}>
      <Tab value="bun" active={props.buns}>
        Булки
      </Tab>
      <Tab value="sauce" active={props.sauces}>
        Соусы
      </Tab>
      <Tab value="main" active={props.mains}>
        Начинки
      </Tab>
    </div>
  )
}
export default TabsList;
