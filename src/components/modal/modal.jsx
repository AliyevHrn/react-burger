import ReactDOM from 'react-dom';
import ModalHeader from './modal-header/modal-header';
import ModalOverlay from './modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import './modal.css';

const modalRoot = document.getElementById("react-modals");

function Modal ({header, children, onClose, state}) {

  return ReactDOM.createPortal(
    <>
      <div className={state === 'shown' ? 'Modal shown' : 'Modal hidden'} onKeyDown={onClose}>
        <div className='modal-window'>
          <ModalHeader header={header} onClose={onClose}/>
          <div className="modal-body">
            {children}
          </div>
        </div>
        <ModalOverlay onClose={onClose} />
      </div>
    </>,
    modalRoot
  );
}
Modal.propTypes = {
  state: PropTypes.string,
  onClose: PropTypes.func,
  header: PropTypes.string
}
export default Modal;
