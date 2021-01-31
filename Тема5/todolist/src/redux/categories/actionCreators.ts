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

// Загрузка всех категорий из базы данных в редакс
export const categoriesFetchData = () => (dispatch: any) => {
    dispatch(categoryIsLoading(true));
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb
            .getAllValue('categories')
            .then((categories) => dispatch(setCategories(categories)))
            .then(() => dispatch(categoryIsLoading(false)));
    };
    runIndexedDb();
};

// Добавление новой категории в редакс и в базу данных
export const addCategoryFetchData = (newCategory: CategoryType) => (dispatch: any) => {
    dispatch(categoriesIncrementId());
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('categories', newCategory);
    };
    runIndexedDb();
    dispatch(addCategory(newCategory));
};

// Удаление категории по ID из базы данных и из редакса
export const deleteCategoryFetchData = (id: number) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.deleteValue('categories', id);
    };
    runIndexedDb();
    dispatch(deleteCategory(id));
};

// Редактирование категории в базе данных и в редаксе
export const editCategoryFetchData = (updatedCategory: CategoryType) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('categories', updatedCategory);
    };
    runIndexedDb();

    dispatch(editCategory(updatedCategory));
};
