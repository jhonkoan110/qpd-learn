import React from 'react';
import './ModalInputs.css';

interface IProps {
    title?: string;
    description?: string;
}

const CategoryModal: React.FC<IProps> = ({ title, description }) => {
    return (
        <div>
            <fieldset className="modal__fieldset modal__fs1 task-modal__fieldset">
                <legend className="modal__legend task-modal__legend">
                    Имя<span className="require-span">*</span>
                </legend>
                <input
                    className="modal__input"
                    type="text"
                    placeholder="Введите имя категории"
                    required={true}
                    maxLength={255}
                    value={title || undefined}
                />
            </fieldset>
            <fieldset className="modal__fieldset modal__fs2 task-modal__fieldset">
                <legend className="modal__legend task-modal__legend">Описание</legend>
                <textarea
                    className="modal__input modal__textarea"
                    placeholder="Введите описание категории"
                    maxLength={512}
                    value={description || undefined}
                />
            </fieldset>
        </div>
    );
};

export default CategoryModal;
