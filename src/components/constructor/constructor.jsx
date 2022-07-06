import PropTypes from 'prop-types';
import Styles from './constructor.module.css';

function Constructor(props) {
  return (
    <>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <div className={Styles.wrapper}>
        {props.children}
      </div>
    </>
  );
}
Constructor.propTypes = {
  children: PropTypes.node.isRequired
};
export default Constructor;
