import React, { Dispatch, SetStateAction } from 'react';
import './Modal.css';

interface IModalProps {}

const Modal: React.FC<IModalProps> = ({ children }) => {
    return (
        <div className="modal">
            <div className="modal__content">{children}</div>
        </div>
    );
};

export default Modal;
