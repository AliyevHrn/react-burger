import React from 'react';
import ReactDOM from 'react-dom';
import ModalHeader from './modal-header/modal-header';
import ModalOverlay from './modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import Styles from './modal.module.css';


const modalRoot = document.getElementById("react-modals");

function Modal ({header, children, onClose, state}) {

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  }, [])

  return ReactDOM.createPortal(
    <>
      <div className={`${Styles.Modal} ${state === 'shown' ? Styles.shown : Styles.hidden}`}>
        <div className={Styles.window}>
          <ModalHeader header={header} onClose={onClose}/>
          <div className={Styles.body}>
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
  state: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
}
export default Modal;
