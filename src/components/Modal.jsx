// Modal.jsx
import React from 'react';
import './Modal.css'; // Assuming you have some CSS for the modal
import SwiperModal from './SwiperModal';
import { IoMdClose } from "react-icons/io";

const Modal = ({ show, handleClose, title, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <SwiperModal handleClose={handleClose}/>
      </div>
    </div>
  );
};

export default Modal;
