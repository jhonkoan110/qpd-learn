import React, { useState } from 'react';
import './Item.css';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import CategoryModal from '../Modal/CategoryModal/CategoryModal';
import TasksModal from '../Modal/TasksModal/TasksModal';

interface IProps {
    deleteModalText: string;
    isCategory?: boolean;
    isTask?: boolean;
    id: number;
    title: string;
    description: string;
    deleteItem: (id: number) => void;
}

const CategoryItem: React.FC<IProps> = ({
    deleteModalText,
    isTask,
    isCategory,
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
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="item__actions">
                <div className="item__edit">
                    <button className="item__button" onClick={openEditModalHandler}>
                        <img src={editIcon} alt="edit icon" />
                    </button>
                    {activeEditModal && isCategory && (
                        <CategoryModal
                            id={id}
                            isEdit={isEdit}
                            editTitle={title}
                            editDescription={description}
                            modalHeader="Редактирование категории"
                            modalButtonText="Сохранить"
                            closeModal={closeEditOpenHandler}
                        />
                    )}
                    {activeEditModal && isTask && (
                        <TasksModal
                            id={id}
                            isEdit={isEdit}
                            editTitle={title}
                            editDescription={description}
                            modalHeader="Редактирование задачи"
                            modalButtonText="Сохранить"
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

export default CategoryItem;
