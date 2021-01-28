import { CategoryType } from './reducer';
export const DELETE_CATEGORY: string = 'DELETE_CATEGORY';
export const ADD_CATEGORY: string = 'ADD_CATEGORY';
export const EDIT_CATEGORY: string = 'EDIT-CATEGORY';

export interface IAddCategory {
    type: typeof ADD_CATEGORY;
    payload: CategoryType;
}

export type DeleteCategoryActionType = {
    type: typeof DELETE_CATEGORY;
    id: number;
};

export interface IEditCategory {
    type: typeof EDIT_CATEGORY;
    updatedCategory: CategoryType;
}
