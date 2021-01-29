import React from 'react';
import './Title.css';

interface TitleProps {
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Title: React.FC<TitleProps> = ({ placeholder, value, onChange }) => {
    return (
        <fieldset className="modal__fieldset modal__fs1 task-modal__fieldset">
            <legend className="modal__legend task-modal__legend">
                Имя<span className="require-span">*</span>
            </legend>
            <input
                className="modal__input title__input"
                type="text"
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
            />
        </fieldset>
    );
};

export default Title;
