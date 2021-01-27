import React from 'react';
import './DeleteModal.css';

interface IProps {
    deleteCssId: string;
    deleteHeading: string;
    isTask: boolean;
    title: string;
}

const DeleteModal: React.FC<IProps> = ({ deleteCssId, deleteHeading, isTask, title }) => {
    return (
        <div id={deleteCssId} className="modal">
            <div className="modal__wrapper delete-modal">
                <a href="#close" title="Close" className="close-modal">
                    ×
                </a>
                <h1 className="modal__heading">{deleteHeading}</h1>
                {isTask ? (
                    <p className="delete-modal__text">
                        Вы уверены, что хотите удалить задачу '{title}'?
                    </p>
                ) : (
                    <p className="delete-modal__text">
                        Вы уверены, что хотите удалить категорию '{title}'?
                    </p>
                )}

                <div className="modal__buttons">
                    <button className="modal__create-button delete-modal__button">Да</button>
                    <a href="#close">
                        <button className="modal__close-button delete-modal__button">Нет</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
