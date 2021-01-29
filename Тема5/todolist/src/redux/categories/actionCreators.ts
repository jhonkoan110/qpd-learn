import { CategoryType } from './reducer';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    IAddCategory,
    IDeleteCategory,
    IEditCategory,
} from './actionTypes';

export const deleteCategory = (id: number): IDeleteCategory => {
    return {
        type: DELETE_CATEGORY,
        id,
    };
};

export const addCategory = (newCategory: CategoryType): IAddCategory => ({
    type: ADD_CATEGORY,
    payload: newCategory,
});

export const editCategory = (updatedCategory: CategoryType): IEditCategory => ({
    type: EDIT_CATEGORY,
    updatedCategory,
});
