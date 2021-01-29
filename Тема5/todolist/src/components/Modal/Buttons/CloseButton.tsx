import React from 'react';

interface CloseButtonProps {
    buttonText: string;
    closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ buttonText, closeModal }) => {
    return (
        <button className="modal__close-button" onClick={closeModal}>
            {buttonText}
        </button>
    );
};

export default CloseButton;
