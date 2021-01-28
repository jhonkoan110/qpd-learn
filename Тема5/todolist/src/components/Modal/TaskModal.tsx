import React, { ChangeEvent } from 'react';
import { CategoryType } from '../../redux/categories/reducer';
import './ModalInputs.css';
import './Modal.css';

interface IProps {
    id: number;
    isEditing?: boolean;
    titleText?: string;
    descriptionText?: string;
    editTitleInputText?: string;
    editDescriptionInputText?: string;
    categories?: Array<CategoryType>;
    changeAddTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAddDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    createTask?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    changeEditTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeEditDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    saveTask: (id: number) => void;
    endEditing?: () => void;
}

const TaskModal: React.FC<IProps> = ({
    id,
    isEditing,
    categories,
    titleText,
    descriptionText,
    editTitleInputText,
    editDescriptionInputText,
    changeAddTitleText,
    changeAddDescriptionText,
    createTask,
    changeEditTitleText,
    changeEditDescriptionText,
    saveTask,
    endEditing,
}) => {
    return (
        <div>
            <div className="modal__task-container">
                <fieldset className="modal__fieldset modal__fs1 task-modal__fieldset">
                    <legend className="modal__legend task-modal__legend">
                        Имя<span className="require-span">*</span>
                    </legend>
                    <input
                        className="modal__input"
                        type="text"
                        placeholder="Введите имя задачи"
                        required={true}
                        maxLength={255}
                        value={titleText || editTitleInputText}
                        onChange={changeAddTitleText || changeEditTitleText}
                    />
                </fieldset>
                <fieldset className="modal__fieldset task-modal__fieldset">
                    <legend className="modal__legend task-modal__legend">Категория</legend>
                    <select name="category" id="category__select" className="modal__select">
                        {categories?.map((item) => {
                            return <option value={item.title}>{item.title}</option>;
                        })}
                    </select>
                </fieldset>
            </div>
            <fieldset className="modal__fieldset modal__fs2">
                <legend className="modal__legend">Описание</legend>
                <textarea
                    className="modal__input modal__textarea"
                    placeholder="Введите описание задачи"
                    maxLength={1536}
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
                                saveTask(id);
                                if (endEditing) endEditing();
                            }}>
                            Сохранить
                        </button>
                    </a>
                ) : (
                    <a href="#close">
                        <button className="modal__create-button" onClick={createTask}>
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

export default TaskModal;
