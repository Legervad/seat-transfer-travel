// Modal.js
import React from "react";

function Modal({ isOpen, seatNumber, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Do you want to buy the seat {seatNumber}?</h2>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
