import { DeleteCategoryActionType, DELETE_CATEGORY } from './actionTypes';

export const deleteCategory = (id: number): DeleteCategoryActionType => {
    return {
        type: DELETE_CATEGORY,
        id,
    };
};
