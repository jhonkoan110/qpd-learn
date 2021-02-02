import { CategoryType } from './reducer';
import {
    ADD_CATEGORY,
    CATEGORIES_INCREMENT_ID,
    CATEGORIES_IS_LOADING,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    IAddCategory,
    IDeleteCategory,
    IEditCategory,
    SET_CATEGORIES,
} from './actionTypes';
import IndexedDb from '../../services/IndexedDB';

export const categoryIsLoading = (isLoading: boolean) => ({
    type: CATEGORIES_IS_LOADING,
    isLoading,
});

export const setCategories = (categories: Array<CategoryType>) => ({
    type: SET_CATEGORIES,
    categories,
});

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

export const categoriesIncrementId = () => ({ type: CATEGORIES_INCREMENT_ID });

export const editCategory = (updatedCategory: CategoryType): IEditCategory => ({
    type: EDIT_CATEGORY,
    updatedCategory,
});
