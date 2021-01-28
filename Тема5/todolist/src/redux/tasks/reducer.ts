import { DELETE_TASK } from './actionTypes';

export interface ITask {
    id: number;
    title: string;
    description: string;
    categoryId?: number;
}

const initialState = {
    tasks: [
        { id: 1, title: 'Задача 1', description: 'Описание задачи 1' },
        { id: 2, title: 'Задача 2', description: 'Описание задачи 2' },
        { id: 3, title: 'Задача 3', description: 'Описание задачи 3' },
        { id: 4, title: 'Задача 4', description: 'Описание задачи 4' },
        { id: 5, title: 'Задача 5', description: 'Описание задачи 5' },
        { id: 6, title: 'Задача 6', description: 'Описание задачи 6' },
    ] as Array<ITask>,
};

export type InitialStateType = typeof initialState;

const tasksReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
            };
        }

        default:
            return state;
    }
};

export default tasksReducer;
