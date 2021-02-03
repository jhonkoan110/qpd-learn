import React from 'react';
import editIcon from '../../../assets/edit.png';
import deleteIcon from '../../../assets/delete.png';
import folderIcon from '../../../assets/folder.png';
import '../Item.css';
import { ITask } from '../../../redux/tasks/reducer';

interface TaskItemProps {
    task: ITask;
    openModal: (id?: number, title?: string, description?: string) => void;
    openDeleteModal: (id: number, title: string, description: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, openModal, openDeleteModal }) => {
    const { id, title, categoryTitle, description } = task;

    return (
        <div className="item">
            <div className="item__content block">
                <h4 className="item__content__header">
                    {title}{' '}
                    <div className="item__content__category">
                        {categoryTitle && <img src={folderIcon} alt="folder icon" />}
                        <span className="item__content__category-title">{categoryTitle}</span>
                    </div>
                </h4>

                <p>{description}</p>
            </div>
            <div className="item__actions">
                <div className="item__edit">
                    <button
                        className="item__button"
                        onClick={() => openModal(id, title, description)}>
                        <img src={editIcon} alt="edit icon" />
                    </button>
                </div>
                <div className="item__delete">
                    <button
                        className="item__button"
                        onClick={() => openDeleteModal(id, title, description)}>
                        <img src={deleteIcon} alt="delete icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
