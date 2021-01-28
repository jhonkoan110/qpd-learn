import React, { ChangeEvent } from 'react';
import './ModalInputs.css';

interface IProps {
    title?: string;
    description?: string;
    titleText?: string;
    descriptionText?: string;
    changeTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    createCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CategoryModal: React.FC<IProps> = ({
    title,
    description,
    titleText,
    descriptionText,
    changeTitleText,
    changeDescriptionText,
    createCategory,
}) => {
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
                    value={title || titleText}
                    onChange={changeTitleText}
                />
            </fieldset>
            <fieldset className="modal__fieldset modal__fs2 task-modal__fieldset">
                <legend className="modal__legend task-modal__legend">Описание</legend>
                <textarea
                    className="modal__input modal__textarea"
                    placeholder="Введите описание категории"
                    maxLength={512}
                    value={description || descriptionText}
                    onChange={changeDescriptionText}
                />
            </fieldset>

            <div className="modal__buttons">
                <a href="#close">
                    <button className="modal__create-button" onClick={createCategory}>
                        Создать
                    </button>
                </a>
                <a href="#close">
                    <button className="modal__close-button">Закрыть</button>
                </a>
            </div>
        </div>
    );
};

export default CategoryModal;
