import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { addTaskFetchData, editTaskFetchData } from '../../../redux/tasks/actionCreators';
import { ITask } from '../../../redux/tasks/reducer';
import Buttons from '../Buttons/Buttons';
import CloseButton from '../Buttons/CloseButton';
import ModalButton from '../Buttons/ModalButton';
import Description from '../Fieldsets/Description/Description';
import SelectCategory from '../Fieldsets/SelectCategory/SelectCategory';
import Title from '../Fieldsets/Title/Title';
import Modal from '../Modal';

interface IModalProps {
    id?: number;
    isEdit?: boolean;
    editTitle?: string;
    editDescription?: string;
    modalHeader: string;
    modalButtonText: string;
    closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TasksModal: React.FC<IModalProps> = ({
    id,
    isEdit,
    editTitle,
    editDescription,
    closeModal,
    modalHeader,
    modalButtonText,
}) => {
    const [title, setTitle] = useState(editTitle ? editTitle : '');
    const [description, setDescription] = useState(editDescription ? editDescription : '');
    const [required, setRequired] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const dispatch = useDispatch();
    const currentId = useSelector((state: AppStateType) => state.taskList.currentId);

    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequired(false);
        setTitle(e.target.value);
    };

    const changeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const categoryClickHandler = (categoryId: number, categoryTitle: string) => {
        setSelectedCategory(categoryTitle);
        setCategoryId(categoryId);
    };

    const clearCategoriesHandler = () => {
        setSelectedCategory('');
        setCategoryId(0);
    };

    const addTaskHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (title === '') {
            setRequired(true);
        } else {
            setRequired(false);
            const newTask: ITask = {
                id: currentId + 1,
                title,
                description,
                categoryId: categoryId !== 0 ? categoryId : undefined,
            };
            dispatch(addTaskFetchData(newTask));

            setTitle('');
            setDescription('');
        }
    };

    const editTaskHandler = (id?: number) => {
        if (title === '') {
            setRequired(true);
        } else {
            if (id) {
                const updatedTask: ITask = {
                    id,
                    title,
                    description,
                };
                dispatch(editTaskFetchData(updatedTask));
            }
        }
    };

    return (
        <Modal>
            <button className="close-modal" onClick={closeModal}>
                ×
            </button>

            <h1 className="modal__heading">{modalHeader}</h1>
            <div className="modal__task-container">
                <Title
                    required={required}
                    value={title}
                    placeholder="Введите имя задачи"
                    onChange={titleChangeHandler}
                />

                <SelectCategory
                    selectedCategory={selectedCategory}
                    onCategoryClick={categoryClickHandler}
                    onClearCategoriesClick={clearCategoriesHandler}
                />
            </div>
            <p className={required ? 'task__error-field-visible' : 'task__error-field'}>
                Поле должно быть обязательным
            </p>

            <Description
                value={description}
                placeholder="Введите описание задачи"
                onChange={changeDescriptionHandler}
            />
            <Buttons>
                {isEdit ? (
                    <ModalButton buttonText="Сохранить" onClick={() => editTaskHandler(id)} />
                ) : (
                    <ModalButton buttonText={modalButtonText} onClick={addTaskHandler} />
                )}
                <CloseButton buttonText="Закрыть" closeModal={closeModal} />
            </Buttons>
        </Modal>
    );
};

export default TasksModal;
