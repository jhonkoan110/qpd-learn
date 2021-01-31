import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    SET_TASKS,
    TASKS_IS_LOADING,
    TASKS_INCREMENT_ID,
} from './actionTypes';

export interface ITask {
    id: number;
    title: string;
    description: string;
    categoryId?: number;
}

const initialState = {
    currentId: 1,
    isLoading: false,
    hasErrored: false,
    tasks: [] as Array<ITask>,
};

export type InitialStateType = typeof initialState;

const tasksReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TASKS_IS_LOADING: {
            return { ...state, isLoading: action.isLoading };
        }

        case SET_TASKS: {
            return {
                ...state,
                tasks: action.tasks,
            };
        }

        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
            };
        }

        case ADD_TASK: {
            return { ...state, tasks: [...state.tasks, action.payload] };
        }

        case TASKS_INCREMENT_ID: {
            return { ...state, currentId: state.currentId + 1 };
        }

        case EDIT_TASK: {
            const newTasks: Array<ITask> = state.tasks.map((item) => {
                if (item.id === action.updatedTask.id) {
                    item = action.updatedTask;
                }
                return item;
            });

            return { ...state, tasks: newTasks };
        }

        default:
            return state;
    }
};

export default tasksReducer;
