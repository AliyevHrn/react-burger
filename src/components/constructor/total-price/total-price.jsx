import Styles from './total-price.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function TotalPrice(props) {
  return (
    <div className={`${Styles.totalPrice} mr-10`}>
      <p className="text_type_digits-medium">
        {props.totalPrice}
      </p>
      <div className={Styles.cyrrencyIcon}>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  )
}
TotalPrice.propTypes= {
  totalPrice: PropTypes.number
}
export default TotalPrice;
