import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={props.opened}
    contentLabel="Example Modal"
    ariaHideApp={false}
    onRequestClose={props.close}
    className="modal "
    closeTimeoutMS={200}
  >
    <h1 className="modal__title"> You should </h1>
    <p className="modal__body">{props.children}</p>
    <button className="button" onClick={props.close}>
      Thanks!
    </button>
  </Modal>
);

export default OptionModal;
