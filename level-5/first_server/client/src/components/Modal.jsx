import React from 'react';
import "./Modal.css"

function Modal({ children, isOpen, handleClose }) {
    if (!isOpen) return null;
    
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={handleClose} className="close-btn">
                x
                </button>
                {children}
            </div>
        </div>
    )
}

    export default Modal;
