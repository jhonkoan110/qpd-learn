import { DeleteTaskActionType, DELETE_TASK } from './actionTypes';

export const deleteTask = (id: number): DeleteTaskActionType => ({
    type: DELETE_TASK,
    id,
});
