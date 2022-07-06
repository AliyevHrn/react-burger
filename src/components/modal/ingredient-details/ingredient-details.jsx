import PropTypes from 'prop-types';
import Styles from './ingredient-details.module.css';

function IngredientDetail(props) {
  return (
    <div className="mb-5 pr-9 pl-9">
      <img src={props.image_large} alt={props.name} />
      <p className="text text_type_main-medium mt-4 mb-8">
        {props.name}
      </p>
      <div className={Styles.modal__ingredients}>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{props.calories}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.proteins}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.fat}</p>
        </div>
        <div className={Styles.ingredients__item}>
          <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{props.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}
IngredientDetail.propTypes= {
  name: PropTypes.string,
  image_larger: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number
}
export default IngredientDetail;
