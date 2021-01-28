import React, { ChangeEvent } from 'react';
import './ModalInputs.css';
import './Modal.css';

interface IProps {
    id: number;
    isEditing?: boolean;
    titleText?: string;
    descriptionText?: string;
    editTitleInputText?: string;
    editDescriptionInputText?: string;
    changeAddTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAddDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    createCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    changeEditTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeEditDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    saveCategory: (id: number) => void;
    endEditing?: () => void;
}

const CategoryModal: React.FC<IProps> = ({
    id,
    isEditing,
    titleText,
    descriptionText,
    editTitleInputText,
    editDescriptionInputText,
    changeAddTitleText,
    changeAddDescriptionText,
    createCategory,
    changeEditTitleText,
    changeEditDescriptionText,
    saveCategory,
    endEditing,
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
                    value={titleText || editTitleInputText}
                    onChange={changeAddTitleText || changeEditTitleText}
                />
            </fieldset>
            <fieldset className="modal__fieldset modal__fs2 task-modal__fieldset">
                <legend className="modal__legend task-modal__legend">Описание</legend>
                <textarea
                    className="modal__input modal__textarea"
                    placeholder="Введите описание категории"
                    maxLength={512}
                    value={descriptionText || editDescriptionInputText}
                    onChange={changeAddDescriptionText || changeEditDescriptionText}
                />
            </fieldset>

            <div className="modal__buttons">
                {isEditing ? (
                    <a href="#close">
                        <button
                            className="modal__create-button"
                            onClick={() => {
                                saveCategory(id);
                                if (endEditing) endEditing();
                            }}>
                            Сохранить
                        </button>
                    </a>
                ) : (
                    <a href="#close">
                        <button className="modal__create-button" onClick={createCategory}>
                            Создать
                        </button>
                    </a>
                )}

                <a href="#close">
                    <button className="modal__close-button" onClick={endEditing}>
                        Закрыть
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CategoryModal;
