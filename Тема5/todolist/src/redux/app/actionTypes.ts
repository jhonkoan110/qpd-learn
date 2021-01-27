export const OPEN_CREATE_MODAL: string = 'OPEN_CREATE_MODAL';
export const OPEN_EDIT_MODAL: string = 'OPEN_EDIT_MODAL';

export interface IOpenCreateModal {
    type: typeof OPEN_CREATE_MODAL;
    modalCssId: string;
    modalHeading: string;
}

export interface IOpenEditModal {
    type: typeof OPEN_EDIT_MODAL;
    modalCssId: string;
}
