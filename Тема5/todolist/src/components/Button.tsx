import React from 'react';

interface ButtonProps {
    buttonText: string;
    buttonClass: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonClass, onClick }) => {
    return (
        <button className={buttonClass} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;
