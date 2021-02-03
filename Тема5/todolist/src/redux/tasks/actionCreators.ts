import { ITask } from './reducer';
import {
    ADD_TASK,
    DeleteTaskActionType,
    DELETE_CATEGORY_ID,
    DELETE_TASK,
    EDIT_TASK,
    SET_TASKS,
    TASKS_INCREMENT_ID,
    TASKS_IS_LOADING,
} from './actionTypes';

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

export const deleteCategoryId = (id: number) => ({ type: DELETE_CATEGORY_ID, id });
