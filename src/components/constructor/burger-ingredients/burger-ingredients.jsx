import TabsList from './tabs-list/tabs-list';
import PropTypes from 'prop-types';
import Styles from './burger-ingredients.module.css';

function BurgerIngredients(props) {
  return (
    <div className={Styles.ingredients}>
      <TabsList />
      {props.children}
    </div>
  )
}
BurgerIngredients.propTypes = {
  children: PropTypes.node.isRequired
};

export default BurgerIngredients;
