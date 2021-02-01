import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCategoryFetchData,
    editCategoryFetchData,
} from '../../../redux/categories/actionCreators';
import { CategoryType } from '../../../redux/categories/reducer';
import { AppStateType } from '../../../redux/store';
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
