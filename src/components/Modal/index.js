import React from 'react';
import {RiCloseFill} from "react-icons/ri"

const Modal = ({handleClose, show, children,id}) => {
    return (
        <div className={show ? 'modal-display' : 'modal-display-none'} id={id}>
            <div className="modal-main">
                <div className="close-icon-wrap" onClick={handleClose}>
                    <RiCloseFill/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;