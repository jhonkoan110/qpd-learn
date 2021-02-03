import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteModal from '../components/Modal/DeleteModal/DeleteModal';
import { deleteTaskFetchData, tasksFetchData } from '../service/tasks';
import Tasks from '../Tasks/Tasks';
import TasksModal from '../Tasks/TasksModal/TasksModal';

const TaskPage: React.FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [activeDeleteModal, setActiveDeleteModal] = useState(false);
    const [modalHeader, setModalHeader] = useState('Добавить задачу');
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const isTask: boolean = true;
    const deleteModalText: string = 'задачу';

    // Открыть модальное окно(добавление/редактирование)
    const openModalClickHadnler = (id?: number, title?: string, description?: string) => {
        if (id && title) {
            setId(id);
            setTitle(title);
            if (description) {
                setDescription(description);
            }
            setModalHeader('Редактирование задачи');
            setIsEdit(true);
        }

        setActiveModal(true);
    };

    // Обнулить id, title, description
    const unsetProperties = () => {
        setId(0);
        setTitle('');
        setDescription('');
    };

    // Закрыть модальное окно(добавление/редактирование)
    const closeModalClickHandler = () => {
        unsetProperties();
        setIsEdit(false);
        setModalHeader('Добавить задачу');
        setActiveModal(false);
    };

    // Открыть модальное окно(удаление)
    const openDeleteModalHandler = (id: number, title: string, description: string) => {
        setId(id);
        setTitle(title);
        setDescription(description);
        setActiveDeleteModal(true);
    };

    // Закрыть модальное окно(удаление)
    const closeDeleteModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        unsetProperties();
        setActiveDeleteModal(false);
    };

    // Удалить задачу по id, обновить UI
    const deleteItemHandler = (id: number) => {
        dispatch(deleteTaskFetchData(id));
        dispatch(tasksFetchData());
    };

    return (
        <div>
            <button className="header__add-item" onClick={() => openModalClickHadnler()}>
                Добавить задачу
            </button>
            <Tasks
                openModal={openModalClickHadnler}
                openDeleteModalHandler={openDeleteModalHandler}
                setId={setId}
            />
            {activeModal && (
                <TasksModal
                    id={id}
                    isEdit={isEdit}
                    editTitle={title}
                    editDescription={description}
                    modalHeader={modalHeader}
                    modalButtonText={isEdit ? 'Сохранить' : 'Создать'}
                    closeModal={closeModalClickHandler}
                />
            )}
            {activeDeleteModal && (
                <DeleteModal
                    id={id}
                    isTask={isTask}
                    title={title}
                    deleteModalText={deleteModalText}
                    onAcceptClick={deleteItemHandler}
                    onCancelClick={closeDeleteModalHandler}
                />
            )}
        </div>
    );
};

export default TaskPage;
