import { ITask } from './reducer';
import {
    ADD_TASK,
    DeleteTaskActionType,
    DELETE_TASK,
    EDIT_TASK,
    SET_TASKS,
    TASKS_INCREMENT_ID,
    TASKS_IS_LOADING,
} from './actionTypes';
import IndexedDb from '../../services/IndexedDB';
import { Dispatch } from 'react';

export const tasksIsLoading = (isLoading: boolean) => ({
    type: TASKS_IS_LOADING,
    isLoading,
});

export const setTasks = (tasks: Array<ITask>) => ({
    type: SET_TASKS,
    tasks,
});

export const deleteTask = (id: number): DeleteTaskActionType => ({
    type: DELETE_TASK,
    id,
});

export const addTask = (newTask: ITask) => ({
    type: ADD_TASK,
    payload: newTask,
});

export const tasksIncrementId = () => ({ type: TASKS_INCREMENT_ID });

export const editTask = (updatedTask: ITask) => ({
    type: EDIT_TASK,
    updatedTask,
});

// Загрузка всех задач из базы данных в редакс
export const tasksFetchData = () => (dispatch: any) => {
    dispatch(tasksIsLoading(true));

    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.getAllValue('tasks').then((tasks) => dispatch(setTasks(tasks)));
    };
    runIndexedDb().then(dispatch(tasksIsLoading(false)));
};

// Добавление новой задачи в редакс и в базу данных
export const addTaskFetchData = (newTask: ITask) => (dispatch: any) => {
    dispatch(tasksIncrementId());
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('tasks', newTask);
    };
    runIndexedDb();
    dispatch(addTask(newTask));
};

// Удаление задачи по ID из базы данных и из редакса
export const deleteTaskFetchData = (id: number) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.deleteValue('tasks', id);
    };
    runIndexedDb();
    dispatch(deleteTask(id));
};

// Редактирование задачи в базе данных и в редаксе
export const editTaskFetchData = (newTask: ITask) => (dispatch: any) => {
    const runIndexedDb = async () => {
        const indexedDb = new IndexedDb('todolist');
        await indexedDb.createObjectStore(['tasks', 'categories']);
        await indexedDb.putValue('tasks', newTask);
    };
    runIndexedDb();
    dispatch(editTask(newTask));
};
