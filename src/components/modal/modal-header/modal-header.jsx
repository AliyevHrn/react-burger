import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Styles from './modal-header.module.css';

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <h3 className="text text_type_main-large">{props.header}</h3>
      <span className={Styles.close} onClick={props.onClose}>
        <CloseIcon type="primary" />
      </span>
    </div>
  )
}
ModalHeader.propTypes= {
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
}
export default ModalHeader;
