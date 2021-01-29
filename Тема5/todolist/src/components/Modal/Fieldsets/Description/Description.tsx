import React from 'react';
import './Description.css';

interface DescriptionProps {
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Description: React.FC<DescriptionProps> = ({ placeholder, value, onChange }) => {
    return (
        <fieldset className="modal__fieldset modal__fs2 task-modal__fieldset">
            <legend className="modal__legend task-modal__legend">Описание</legend>
            <textarea
                className="modal__input modal__textarea"
                placeholder={placeholder}
                maxLength={512}
                value={value}
                onChange={onChange}
            />
        </fieldset>
    );
};

export default Description;
