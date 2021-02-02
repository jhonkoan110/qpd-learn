import React from 'react';
import Buttons from '../../Buttons/ModalFooter';
import Modal from '../Modal';
import Button from '../../Button';

interface DeleteModalProps {
    deleteModalText: string;
    isTask: boolean | undefined;
    id: number;
    title: string;
    onAcceptClick: (id: number) => void;
    onCancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
    deleteModalText,
    isTask,
    id,
    title,
    onAcceptClick,
    onCancelClick,
}) => {
    return (
        <Modal>
            <button className="close-modal" onClick={onCancelClick}>
                ×
            </button>
            <h1 className="modal__heading">Удаление {isTask ? 'задачи' : 'категории'}</h1>
            <p className="delete-modal__text">
                Вы действительно хотите удалить {deleteModalText} "{title}"?
            </p>
            <Buttons>
                <Button
                    buttonText="Да"
                    buttonClass="modal__create-button"
                    onClick={() => onAcceptClick(id)}
                />
                <Button
                    buttonText="Нет"
                    buttonClass="modal__close-button"
                    onClick={onCancelClick}
                />
            </Buttons>
        </Modal>
    );
};

export default DeleteModal;
