import React from 'react';
import './Title.css';

interface TitleProps {
    placeholder: string;
    required: boolean;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Title: React.FC<TitleProps> = ({ placeholder, required, value, onChange }) => {
    return (
        <fieldset
            className={
                required
                    ? 'modal__fieldset-error  task-modal__fieldset'
                    : 'modal__fieldset  task-modal__fieldset'
            }>
            <legend
                className={
                    required
                        ? 'modal__legend-error task-modal__legend'
                        : 'modal__legend task-modal__legend'
                }>
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
