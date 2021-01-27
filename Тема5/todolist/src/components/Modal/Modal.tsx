import React from 'react';
import CategoryModal from './CategoryModal';
import './Modal.css';
import TaskModal from './TaskModal';

interface IProps {
    heading: string;
    cssId: string;
    isTask?: boolean;
    id?: number;
    title?: string;
    description?: string;
}

const CategoryCreateModal: React.FC<IProps> = ({
    heading,
    cssId,
    id,
    title,
    description,
    isTask,
}) => {
    return (
        <div id={cssId} className="modal">
            <div className="modal__wrapper">
                <a href="#close" title="Close" className="close-modal">
                    ×
                </a>
                <h1 className="modal__heading">{heading}</h1>
                {isTask ? (
                    <TaskModal title={title} description={description} />
                ) : (
                    <CategoryModal title={title} description={description} />
                )}

                <div className="modal__buttons">
                    <button className="modal__create-button">Создать</button>
                    <a href="#close">
                        <button className="modal__close-button">Закрыть</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CategoryCreateModal;
