import React from "react";
import TabsList from './tabs-list/tabs-list';
import Styles from './burger-ingredients.module.css';
import TabsContent from '../burger-ingredients/tabs-content/tabs-content';

function BurgerIngredients() {
  return (
    <div className={Styles.ingredients}>
      <TabsList />
      <TabsContent/>
    </div>
  )
}

export default BurgerIngredients;
