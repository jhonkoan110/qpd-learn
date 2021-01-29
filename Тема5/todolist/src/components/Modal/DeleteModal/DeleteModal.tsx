import React from 'react';
import Buttons from '../Buttons/Buttons';
import CloseButton from '../Buttons/CloseButton';
import ModalButton from '../Buttons/ModalButton';
import Modal from '../Modal';

interface DeleteModalProps {
    id: number;
    title: string;
    onAcceptClick: (id: number) => void;
    onCancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id, title, onAcceptClick, onCancelClick }) => {
    return (
        <Modal>
            <button className="close-modal" onClick={onCancelClick}>
                ×
            </button>
            <h1 className="modal__heading">'Удаление категории'</h1>
            <p>Вы действительно хотите удалить категорию {title}?</p>
            <Buttons>
                <ModalButton buttonText="Да" onClick={() => onAcceptClick(id)} />
                <CloseButton buttonText="Нет" closeModal={onCancelClick} />
            </Buttons>
        </Modal>
    );
};

export default DeleteModal;
