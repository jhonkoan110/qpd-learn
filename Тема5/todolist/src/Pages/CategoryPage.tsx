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
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState({
        id: 0,
        title: '',
        description: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector((state: AppStateType) => state.taskList.tasks);

    // Открыть модальное окно(создание/редактирование)
    const openModalClickHadnler = (id?: number, title?: string, description?: string) => {
        if (id && title) {
            setCurrentCategory({ id, title, description: description || '' });
            setIsEdit(true);
        }

        setIsActiveModal(true);
    };

    // Обнулить id, title, description
    const unsetProperties = () => {
        setCurrentCategory({ id: 0, title: '', description: '' });
    };

    // Закрыть модальное окно(создание/редактирование)
    const closeModalClickHandler = () => {
        unsetProperties();
        setIsEdit(false);
        setIsActiveModal(false);
    };

    // Открыть модальное окно(удаление)
    const openDeleteModalHandler = (id: number, title: string, description: string) => {
        setCurrentCategory({ id, title, description });
        setIsActiveDeleteModal(true);
    };

    // Закрыть модальное окно(удаление)
    const closeDeleteModalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        unsetProperties();
        setIsActiveDeleteModal(false);
    };

    // Удалить категорию по id, обновить все задачи с данной категорией
    // Обновить UI, закрыть модальное окно
    const deleteItemHandler = (id: number) => {
        dispatch(deleteCategoryId(id));
        dispatch(updateAllTasksFetchData(tasks));
        dispatch(deleteCategoryFetchData(id));
        dispatch(categoriesFetchData());
        setIsActiveDeleteModal(false);
    };

    return (
        <div>
            <button className="header__add-item" onClick={() => openModalClickHadnler()}>
                Добавить категорию
            </button>
            <Categories
                openModal={openModalClickHadnler}
                openDeleteModalHandler={openDeleteModalHandler}
            />
            {isActiveModal && (
                <CategoryModal
                    currentCategory={currentCategory}
                    isEdit={isEdit}
                    modalHeader={isEdit ? 'Редактирование категории' : 'Добавить категорию'}
                    modalButtonText={isEdit ? 'Сохранить' : 'Создать'}
                    closeModal={closeModalClickHandler}
                />
            )}
            {isActiveDeleteModal && (
                <DeleteModal
                    id={currentCategory.id}
                    title={currentCategory.title}
                    header="категории"
                    deleteModalText="категорию"
                    onAcceptClick={deleteItemHandler}
                    onCancelClick={closeDeleteModalHandler}
                />
            )}
        </div>
    );
};

export default CategoryPage;
