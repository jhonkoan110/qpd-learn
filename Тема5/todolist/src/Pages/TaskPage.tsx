import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteModal from '../components/Modal/DeleteModal/DeleteModal';
import { deleteTaskFetchData, tasksFetchData } from '../service/tasks';
import Tasks from '../Tasks/Tasks';
import TasksModal from '../Tasks/TasksModal/TasksModal';

const TaskPage: React.FC = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
    const [currentTask, setCurrentTask] = useState({
        id: 0,
        title: '',
        description: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    // Открыть модальное окно(добавление/редактирование)
    const openModalClickHadnler = (id?: number, title?: string, description?: string) => {
        if (id && title) {
            setCurrentTask({ ...currentTask, id, title, description: description || '' });
            setIsEdit(true);
        }

        setIsActiveModal(true);
    };

    // Обнулить id, title, description
    const unsetProperties = () => {
        setCurrentTask({ id: 0, title: '', description: '' });
    };

    // Закрыть модальное окно(добавление/редактирование)
    const closeModalClickHandler = () => {
        unsetProperties();
        setIsEdit(false);
        setIsActiveModal(false);
    };

    // Открыть модальное окно(удаление)
    const openDeleteModalHandler = (id: number, title: string, description: string) => {
        setCurrentTask({ id, title, description });
        setIsActiveDeleteModal(true);
    };

    // Закрыть модальное окно(удаление)
    const closeDeleteModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        unsetProperties();
        setIsActiveDeleteModal(false);
    };

    // Удалить задачу по id, обновить UI
    const deleteItemHandler = (id: number) => {
        dispatch(deleteTaskFetchData(id));
        dispatch(tasksFetchData());
        setIsActiveDeleteModal(false);
    };

    return (
        <div>
            <button className="header__add-item" onClick={() => openModalClickHadnler()}>
                Добавить задачу
            </button>
            <Tasks
                openModal={openModalClickHadnler}
                openDeleteModalHandler={openDeleteModalHandler}
            />
            {isActiveModal && (
                <TasksModal
                    isEdit={isEdit}
                    currentTask={currentTask}
                    modalHeader={isEdit ? 'Редактирование задачи' : 'Добавить задачу'}
                    modalButtonText={isEdit ? 'Сохранить' : 'Создать'}
                    closeModal={closeModalClickHandler}
                />
            )}
            {isActiveDeleteModal && (
                <DeleteModal
                    id={currentTask.id}
                    header="задачи"
                    title={currentTask.title}
                    deleteModalText="задачу"
                    onAcceptClick={deleteItemHandler}
                    onCancelClick={closeDeleteModalHandler}
                />
            )}
        </div>
    );
};

export default TaskPage;
