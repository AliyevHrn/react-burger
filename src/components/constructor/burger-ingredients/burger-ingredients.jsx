import React from "react";
import TabsList from './tabs-list/tabs-list';
import Styles from './burger-ingredients.module.css';
import TabsContent from '../burger-ingredients/tabs-content/tabs-content';
import { useInView } from 'react-intersection-observer';


function BurgerIngredients() {
  const { ref: bunsRef, inView: bunsIsView } = useInView({
    threshold: 0,
    rootMargin: '-400px 0px 0px 0px',
    initialInView: true
  });
  const { ref: saucesRef, inView: saucesIsView } = useInView({
    threshold: 1,
    initialInView: false
  });
  const { ref: mainsRef, inView: mainsIsView } = useInView({
    threshold: 0,
    rootMargin: '400px 0px -400px 0px',
    initialInView: false
  });


  return (
    <div className={Styles.ingredients}>
      <TabsList buns={bunsIsView} sauces={saucesIsView} mains={mainsIsView} />
      <TabsContent bunsRef={bunsRef} saucesRef={saucesRef} mainsRef={mainsRef}/>
    </div>
  )
}

export default BurgerIngredients;
