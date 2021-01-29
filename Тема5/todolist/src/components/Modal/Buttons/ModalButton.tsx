import React from 'react';

interface ModalButtonProps {
    buttonText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonText, onClick }) => {
    return (
        <button className="modal__create-button" onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default ModalButton;
