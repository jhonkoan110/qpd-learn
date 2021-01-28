import React from 'react';
import { CategoryType } from '../../redux/categories/reducer';
import './ModalInputs.css';

interface IProps {
    categories?: Array<CategoryType>;
    title?: string;
    description?: string;
}

const TaskModal: React.FC<IProps> = ({ title, description, categories }) => {
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
                        value={title || undefined}
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
                    maxLength={512}
                    value={description || undefined}
                />
            </fieldset>
            <div className="modal__buttons">
                <a href="#close">
                    <button className="modal__create-button">Создать</button>
                </a>
                <a href="#close">
                    <button className="modal__close-button">Закрыть</button>
                </a>
            </div>
        </div>
    );
};

export default TaskModal;
