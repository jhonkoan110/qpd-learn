import { ITask } from './reducer';
export const DELETE_TASK: string = 'DELETE-TASK';
export const ADD_TASK: string = 'ADD_TASK';
export const EDIT_TASK: string = 'EDIT_TASK';

export interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

export interface IEditTaskAction {
    type: typeof EDIT_TASK;
    payload: ITask;
}

export type DeleteTaskActionType = {
    type: typeof DELETE_TASK;
    id: number;
};
