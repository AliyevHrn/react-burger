import PropTypes from 'prop-types';
import Styles from './modal-overlay.module.css';

function ModalOverlay(props) {
  return (
    <div className={Styles.overlay} onClick={props.onClose}></div>
  )
}
ModalOverlay.propTypes= {
  onClose: PropTypes.func.isRequired
}
export default ModalOverlay;
