import React from 'react';
import Styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

function IngredientDetail() {

  const { ingredientData } = useSelector(store => {
		return store.ingredient;
	})

  return (
    <div className="mb-5 pr-9 pl-9">
      <img src={ingredientData.image_large} alt={ingredientData.name} className={Styles.img} />
      <p className="text text_type_main-medium mt-4 mb-8">
        {ingredientData.name}
      </p>
      <div className={Styles.modal__ingredients}>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.calories}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.proteins}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.fat}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

export default IngredientDetail;
