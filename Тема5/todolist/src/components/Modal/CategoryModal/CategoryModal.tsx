import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCategory,
    addCategoryFetchData,
    categoriesIncrementId,
    editCategory,
    editCategoryFetchData,
} from '../../../redux/categories/actionCreators';
import { CategoryType } from '../../../redux/categories/reducer';
import { AppStateType } from '../../../redux/store';
import IndexedDb from '../../../services/IndexedDB';
import Buttons from '../Buttons/Buttons';
import CloseButton from '../Buttons/CloseButton';
import ModalButton from '../Buttons/ModalButton';
import Description from '../Fieldsets/Description/Description';
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

const CategoryModal: React.FC<IModalProps> = ({
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
    const dispatch = useDispatch();
    const categories = useSelector((state: AppStateType) => state.categoryList.categories);
    const currentId = useSelector((state: AppStateType) => state.categoryList.currentId);

    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const changeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    // Добавление категории по кнопке "создать"
    const addCategoryHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newCategory: CategoryType = {
            id: currentId,
            title,
            description,
        };

        dispatch(addCategoryFetchData(newCategory));
        setTitle('');
        setDescription('');
    };

    // Редактирование категории по кнопке редактирования
    const editCategoryHandler = (id?: number) => {
        if (id) {
            const updatedCategory: CategoryType = {
                id,
                title,
                description,
            };
            dispatch(editCategoryFetchData(updatedCategory));
        }
    };

    return (
        <Modal>
            <button className="close-modal" onClick={closeModal}>
                ×
            </button>

            <h1 className="modal__heading">{modalHeader}</h1>
            <Title
                placeholder="Введите имя категории"
                onChange={changeTitleHandler}
                value={title}
            />
            <Description
                value={description}
                placeholder="Введите описание категории"
                onChange={changeDescriptionHandler}
            />
            <Buttons>
                {isEdit ? (
                    <ModalButton buttonText="Сохранить" onClick={() => editCategoryHandler(id)} />
                ) : (
                    <ModalButton buttonText={modalButtonText} onClick={addCategoryHandler} />
                )}

                <CloseButton buttonText="Закрыть" closeModal={closeModal} />
            </Buttons>
        </Modal>
    );
};

export default CategoryModal;
