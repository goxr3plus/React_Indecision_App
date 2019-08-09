import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={props.opened}
    contentLabel="Example Modal"
    ariaHideApp={false}
    onRequestClose={props.close}
    className="header container"
  >
    <div >
      <h1> Selected Option</h1>
      {props.children}
      <p></p>
      <button className="button" onClick={props.close}>Okay</button>
    </div>
  </Modal>
);

export default OptionModal;
