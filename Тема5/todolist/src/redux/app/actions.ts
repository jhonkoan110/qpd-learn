import {
    IOpenCreateModal,
    IOpenEditModal,
    OPEN_CREATE_MODAL,
    OPEN_EDIT_MODAL,
} from './actionTypes';

export const openCreateModal = (): IOpenCreateModal => {
    return {
        type: OPEN_CREATE_MODAL,
        modalCssId: '#open-create-modal',
        modalHeading: 'Создание категории',
    };
};

export const openEditModal = (): IOpenEditModal => {
    return {
        type: OPEN_EDIT_MODAL,
        modalCssId: '#open_edit_modal',
    };
};
