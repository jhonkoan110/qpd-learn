import { CategoryType } from './reducer';
import {
    ADD_CATEGORY,
    DeleteCategoryActionType,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    IAddCategory,
    IEditCategory,
} from './actionTypes';

export const deleteCategory = (id: number): DeleteCategoryActionType => {
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
