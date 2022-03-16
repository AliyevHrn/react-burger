import PropTypes from 'prop-types';

function ModalOverlay(props) {
  return (
    <div className="modal-overlay" onClick={props.onClose}></div>
  )
}
ModalOverlay.propTypes= {
  onClose: PropTypes.func
}
export default ModalOverlay;
