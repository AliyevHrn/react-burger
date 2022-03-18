import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Styles from './ingredients-item.module.css';

function IngredientsItem(props) {
  return (
    <div className={Styles.item}>
      <div onClickCapture={props.handleOpenModal}>
        <div className={Styles.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <h3 className={`${Styles.price} text text_type_digits-default mt-1 mb-1`}>
          {props.price}
          <CurrencyIcon type="primary" />
        </h3>
        <h4 className={`${Styles.name} text text_type_main-default`}>{props.name}</h4>
      </div>
    </div>
  )
}
IngredientsItem.propTypes= {
  price: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
}
export default IngredientsItem;
