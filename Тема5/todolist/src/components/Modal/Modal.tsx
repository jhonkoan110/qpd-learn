import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCategory } from '../../redux/categories/actions';
import { CategoryType } from '../../redux/categories/reducer';
import { editTask } from '../../redux/tasks/actions';
import { ITask } from '../../redux/tasks/reducer';
import CategoryModal from './CategoryModal';
import './Modal.css';
import TaskModal from './TaskModal';

interface IProps {
    heading: string;
    cssId: string;
    titleText?: string;
    descriptionText?: string;
    categories?: Array<CategoryType>;
    isTask?: boolean;
    id: number;
    title: string | '';
    description: string | '';
    isEditing?: boolean;
    changeAddTitleText?: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAddDescriptionText?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    createCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    createTask?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    endEditing?: () => void;
}

const Modal: React.FC<IProps> = ({
    heading,
    cssId,
    titleText,
    descriptionText,
    categories,
    id,
    title,
    description,
    isTask,
    isEditing,
    changeAddTitleText,
    changeAddDescriptionText,
    createCategory,
    createTask,
    endEditing,
}) => {
    const [editTitleInputText, setEditTitleInputText] = useState(title);
    const [editDescriptionInputText, setEditDescriptionInputText] = useState(description);

    const dispatch = useDispatch();

    const changeEditTitleTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setEditTitleInputText(text);
    };

    const changeEditDescriptionTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setEditDescriptionInputText(text);
    };

    const saveCategoryButtonClickHandler = (id: number) => {
        const updatedCategory: CategoryType = {
            id,
            title: editTitleInputText,
            description: editDescriptionInputText,
        };
        dispatch(editCategory(updatedCategory));
    };

    const saveTaskButtonClickHandler = (id: number) => {
        const updatedTask: ITask = {
            id,
            title: editTitleInputText,
            description: editDescriptionInputText,
        };

        dispatch(editTask(updatedTask));
    };

    return (
        <div id={cssId} className="modal">
            <div className="modal__wrapper">
                <a href="#close" title="Close" className="close-modal">
                    ×
                </a>
                <h1 className="modal__heading">{heading}</h1>
                {isTask ? (
                    <TaskModal
                        id={id}
                        isEditing={isEditing}
                        titleText={titleText}
                        descriptionText={descriptionText}
                        categories={categories}
                        changeAddTitleText={changeAddTitleText}
                        changeAddDescriptionText={changeAddDescriptionText}
                        createTask={createTask}
                        editTitleInputText={editTitleInputText}
                        editDescriptionInputText={editDescriptionInputText}
                        changeEditTitleText={changeEditTitleTextHandler}
                        changeEditDescriptionText={changeEditDescriptionTextHandler}
                        saveTask={saveTaskButtonClickHandler}
                        endEditing={endEditing}
                    />
                ) : (
                    <CategoryModal
                        id={id}
                        isEditing={isEditing}
                        titleText={titleText}
                        descriptionText={descriptionText}
                        changeAddTitleText={changeAddTitleText}
                        changeAddDescriptionText={changeAddDescriptionText}
                        createCategory={createCategory}
                        editTitleInputText={editTitleInputText}
                        editDescriptionInputText={editDescriptionInputText}
                        changeEditTitleText={changeEditTitleTextHandler}
                        changeEditDescriptionText={changeEditDescriptionTextHandler}
                        saveCategory={saveCategoryButtonClickHandler}
                        endEditing={endEditing}
                    />
                )}
            </div>
        </div>
    );
};

export default Modal;
