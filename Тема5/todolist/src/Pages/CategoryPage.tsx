import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import CategoryModal from '../Categories/CategoryModal/CategoryModal';
import DeleteModal from '../components/Modal/DeleteModal/DeleteModal';
import { categoriesFetchData, deleteCategoryFetchData } from '../service/categories';
import { AppStateType } from '../redux/store';
import { deleteCategoryId } from '../redux/tasks/actionCreators';
import { updateAllTasksFetchData } from '../service/tasks';

const CategoryPage = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [activeDeleteModal, setActiveDeleteModal] = useState(false);
    const [modalHeader, setModalHeader] = useState('Добавить категорию');
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);
    const isTask: boolean = false;
    const deleteModalText: string = 'категорию';

    // Открыть модальное окно(создание/редактирование)
    const openModalClickHadnler = (id?: number, title?: string, description?: string) => {
        if (id && title) {
            setId(id);
            setTitle(title);
            if (description) {
                setDescription(description);
            }
            setModalHeader('Редактирование категории');
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

    // Закрыть модальное окно(создание/редактирование)
    const closeModalClickHandler = () => {
        unsetProperties();
        setIsEdit(false);
        setModalHeader('Добавить категорию');
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

    // Удалить категорию по id, обновить все задачи с данной категорией
    // Обновить UI
    const deleteItemHandler = (id: number) => {
        dispatch(deleteCategoryId(id));
        dispatch(updateAllTasksFetchData(tasks));
        dispatch(deleteCategoryFetchData(id));
        dispatch(categoriesFetchData());
    };

    return (
        <div>
            <button className="header__add-item" onClick={() => openModalClickHadnler()}>
                Добавить категорию
            </button>
            <Categories
                openModal={openModalClickHadnler}
                openDeleteModalHandler={openDeleteModalHandler}
                setId={setId}
            />
            {activeModal && (
                <CategoryModal
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

export default CategoryPage;
