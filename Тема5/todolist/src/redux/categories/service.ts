import IndexedDb from '../../services/IndexedDB';
import {
    addCategory,
    categoriesIncrementId,
    categoryIsLoading,
    deleteCategory,
    editCategory,
    setCategories,
} from './actionCreators';
import { CategoryType } from './reducer';

// Загрузка всех категорий из базы данных в редакс
export const categoriesFetchData = () => (dispatch: any) => {
    dispatch(categoryIsLoading(true));
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        const categories = await indexedDb.getAllValue('categories');
        dispatch(setCategories(categories));
        dispatch(categoryIsLoading(false));
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
