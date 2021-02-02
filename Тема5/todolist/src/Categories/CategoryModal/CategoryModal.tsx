import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../../redux/categories/reducer';
import {
    addCategoryFetchData,
    categoriesFetchData,
    editCategoryFetchData,
} from '../../redux/categories/service';
import { AppStateType } from '../../redux/store';
import Buttons from '../../components/Buttons/ModalFooter';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button';
import Title from '../../components/Fieldsets/Title/Title';
import Description from '../../components/Fieldsets/Description/Description';

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
    const [title, setTitle] = useState(editTitle || '');
    const [description, setDescription] = useState(editDescription ? editDescription : '');
    const [required, setRequired] = useState(false);

    const dispatch = useDispatch();
    const currentId = useSelector((state: AppStateType) => state.categoryList.currentId);

    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequired(false);
        setTitle(e.target.value);
    };

    const changeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    // Добавление категории по кнопке "создать"
    const addCategoryHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (title === '') {
            setRequired(true);
        } else {
            const newCategory: CategoryType = {
                id: currentId + 1,
                title,
                description,
            };

            dispatch(addCategoryFetchData(newCategory));
            dispatch(categoriesFetchData());
            setTitle('');
            setDescription('');
        }
    };

    // Редактирование категории по кнопке редактирования
    const editCategoryHandler = (id?: number) => {
        if (title === '') {
            setRequired(true);
        } else {
            if (id) {
                const updatedCategory: CategoryType = {
                    id,
                    title,
                    description,
                };
                dispatch(editCategoryFetchData(updatedCategory));
                dispatch(categoriesFetchData());
            }
        }
    };

    return (
        <Modal>
            <button className="close-modal" onClick={closeModal}>
                ×
            </button>

            <h1 className="modal__heading">{modalHeader}</h1>
            <Title
                required={required}
                placeholder="Введите имя категории"
                onChange={changeTitleHandler}
                value={title}
            />
            <p className={required ? 'category__error-field-visible' : 'category__error-field'}>
                Поле должно быть обязательным
            </p>

            <Description
                value={description}
                placeholder="Введите описание категории"
                onChange={changeDescriptionHandler}
            />
            <Buttons>
                <Button
                    buttonText={modalButtonText}
                    buttonClass="modal__create-button"
                    onClick={isEdit ? () => editCategoryHandler(id) : addCategoryHandler}
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

export default CategoryModal;
