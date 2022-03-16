import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <h3 className="ingredient-title">{props.header}</h3>
      <span className="modal-close" onClick={props.onClose}>
        <CloseIcon type="primary" />
      </span>
    </div>
  )
}
ModalHeader.propTypes= {
  onClose: PropTypes.func,
  header: PropTypes.string
}
export default ModalHeader;
