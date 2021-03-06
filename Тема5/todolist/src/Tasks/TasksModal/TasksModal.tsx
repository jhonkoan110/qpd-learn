import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { ITask } from '../../redux/tasks/reducer';
import { addTaskFetchData, editTaskFetchData, tasksFetchData } from '../../service/tasks';
import Buttons from '../../components/Buttons/ModalFooter';
import SelectCategory from '../../Categories/SelectCategory/SelectCategory';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button';
import Title from '../../components/Fieldsets/Title/Title';
import Description from '../../components/Fieldsets/Description/Description';

interface IModalProps {
    // id?: number;
    // editTitle?: string;
    // editDescription?: string;
    currentTask?: ITask;
    isEdit?: boolean;
    modalHeader: string;
    modalButtonText: string;
    closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TasksModal: React.FC<IModalProps> = ({
    // id,
    // editTitle,
    // editDescription,
    currentTask,
    isEdit,
    closeModal,
    modalHeader,
    modalButtonText,
}) => {
    const id: number | undefined = currentTask?.id;
    const editTitle: string | undefined = currentTask?.title;
    const editDescription: string | undefined = currentTask?.description;
    const [title, setTitle] = useState(editTitle || '');
    const [description, setDescription] = useState(editDescription || '');
    const [required, setRequired] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const dispatch = useDispatch();
    const currentId = useSelector((state: AppStateType) => state.taskList.currentId);

    // Обработчик инпута title
    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequired(false);
        setTitle(e.target.value);
    };

    // Обработчик инпута description
    const changeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    // Выбрать категорию в селекторе
    const categoryClickHandler = (categoryId: number, categoryTitle: string) => {
        setSelectedCategory(categoryTitle);
        setCategoryId(categoryId);
    };

    // Очистить категорию в селекторе
    const clearCategoriesHandler = () => {
        setSelectedCategory('');
        setCategoryId(0);
    };

    // Добавить новую задачу, загрузить в БД и обновить UI
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
            dispatch(tasksFetchData());

            setTitle('');
            setDescription('');
        }
    };

    // Редактировать задачу по ID, обновить в БД и обновить UI
    const editTaskHandler = (id?: number) => {
        if (title === '') {
            setRequired(true);
        } else {
            if (id) {
                const updatedTask: ITask = {
                    id,
                    title,
                    description,
                    categoryId: categoryId !== 0 ? categoryId : undefined,
                };
                dispatch(editTaskFetchData(updatedTask));
                dispatch(tasksFetchData());
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
                <Button
                    buttonText={modalButtonText}
                    buttonClass="modal__create-button"
                    onClick={isEdit ? () => editTaskHandler(id) : addTaskHandler}
                />
                <Button
                    buttonText="Закрыть"
                    buttonClass="modal__close-button"
                    onClick={closeModal}
                />
            </Buttons>
        </Modal>
    );
};

export default TasksModal;
