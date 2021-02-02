import React, { useState } from 'react';
import TasksModal from '../../../Tasks/TasksModal/TasksModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
import editIcon from '../../../assets/edit.png';
import deleteIcon from '../../../assets/delete.png';
import folderIcon from '../../../assets/folder.png';
import '../Item.css';

interface TaskItemProps {
    deleteModalText: string;
    categoryTitle?: string;
    isTask?: boolean;
    id: number;
    title: string;
    description: string;
    deleteItem: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
    deleteModalText,
    categoryTitle,
    isTask,
    id,
    title,
    description,
    deleteItem,
}) => {
    const [activeDeleteModal, setActiveDeleteModal] = useState(false);
    const [activeEditModal, setActiveEditModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const openEditModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActiveEditModal(true);
        setIsEdit(true);
    };

    const closeEditOpenHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActiveEditModal(false);
        setIsEdit(false);
    };

    const openDeleteModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActiveDeleteModal(true);
    };

    const closeDeleteModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActiveDeleteModal(false);
    };

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
                    <button className="item__button" onClick={openEditModalHandler}>
                        <img src={editIcon} alt="edit icon" />
                    </button>
                    {activeEditModal && (
                        <TasksModal
                            id={id}
                            isEdit={isEdit}
                            editTitle={title}
                            editDescription={description}
                            modalHeader="Редактирование задачи"
                            modalButtonText={isEdit ? 'Сохранить' : 'Создать'}
                            closeModal={closeEditOpenHandler}
                        />
                    )}
                </div>
                <div className="item__delete">
                    <button className="item__button" onClick={openDeleteModalHandler}>
                        <img src={deleteIcon} alt="delete icon" />
                    </button>
                    {activeDeleteModal && (
                        <DeleteModal
                            id={id}
                            isTask={isTask}
                            title={title}
                            deleteModalText={deleteModalText}
                            onAcceptClick={deleteItem}
                            onCancelClick={closeDeleteModalHandler}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
