import { ITask } from './reducer';
import { ADD_TASK, DeleteTaskActionType, DELETE_TASK, EDIT_TASK } from './actionTypes';

export const deleteTask = (id: number): DeleteTaskActionType => ({
    type: DELETE_TASK,
    id,
});

export const addTask = (newTask: ITask) => ({
    type: ADD_TASK,
    payload: newTask,
});

export const editTask = (updatedTask: ITask) => ({
    type: EDIT_TASK,
    updatedTask,
});
