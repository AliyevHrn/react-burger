import PropTypes from 'prop-types';

function BurgerConstructor(props) {

  return (
    <div className="scrollsection mt-25 pl-4 pr-4">
      <div>
        {props.children}
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  children: PropTypes.element
};

export default BurgerConstructor;
