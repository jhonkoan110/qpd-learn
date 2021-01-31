import { CategoryType } from './reducer';
export const CATEGORIES_IS_LOADING: string = 'CATEGORIES_IS_LOADING';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const DELETE_CATEGORY: string = 'DELETE_CATEGORY';
export const ADD_CATEGORY: string = 'ADD_CATEGORY';
export const CATEGORIES_INCREMENT_ID: string = 'CATEGORIES_INCREMENT_ID';
export const EDIT_CATEGORY: string = 'EDIT-CATEGORY';

export interface ICategoriesIsLoading {
    type: typeof CATEGORIES_IS_LOADING;
    isLoading: boolean;
}

export interface ISetCategoriesAction {
    type: typeof SET_CATEGORIES;
    categories: Array<CategoryType>;
}

export interface IAddCategory {
    type: typeof ADD_CATEGORY;
    payload: CategoryType;
}

export interface IIncrementCurrentId {
    type: typeof CATEGORIES_INCREMENT_ID;
}

export interface IDeleteCategory {
    type: typeof DELETE_CATEGORY;
    id: number;
}

export interface IEditCategory {
    type: typeof EDIT_CATEGORY;
    updatedCategory: CategoryType;
}
