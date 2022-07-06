import Styles from "./constructor-item.module.css";
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


function ConstructorItem(props) {

  return (
    <div className={Styles.item}>
      <div className="drag mr-2">
        <DragIcon type="primary" />
      </div>

      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
      />
    </div>
  )
}

ConstructorItem.propTypes= {
  handleOpenModal: PropTypes.func,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_mobile: PropTypes.string.isRequired
}

export default ConstructorItem;
