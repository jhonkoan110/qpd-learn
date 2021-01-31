import { ITask } from './reducer';
export const TASKS_IS_LOADING = 'TASKS_IS_LOADING';
export const SET_TASKS: string = 'SET_TASKS';
export const DELETE_TASK: string = 'DELETE-TASK';
export const ADD_TASK: string = 'ADD_TASK';
export const TASKS_INCREMENT_ID = 'TASKS_INCREMENT_ID';
export const EDIT_TASK: string = 'EDIT_TASK';

export interface ITasksIsLoading {
    type: typeof TASKS_IS_LOADING;
    payload: boolean;
}

export interface ISetTasksAction {
    type: typeof SET_TASKS;
    payload: Array<ITask>;
}

export interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

export interface ITasksIncrementId {
    type: typeof TASKS_INCREMENT_ID;
}

export interface IEditTaskAction {
    type: typeof EDIT_TASK;
    payload: ITask;
}

export type DeleteTaskActionType = {
    type: typeof DELETE_TASK;
    id: number;
};
