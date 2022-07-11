import PropTypes from 'prop-types';


export const ingredientType = {
	_id: PropTypes.string.isRequired,
  index: PropTypes.number,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  data: PropTypes.object, 
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired	
}
