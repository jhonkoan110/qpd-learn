export const DELETE_TASK: string = 'DELETE-TASK';

export type DeleteTaskActionType = {
    type: typeof DELETE_TASK;
    id: number;
};
