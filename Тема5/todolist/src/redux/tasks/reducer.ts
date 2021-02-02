import { CategoryType } from '../categories/reducer';
import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    SET_TASKS,
    TASKS_IS_LOADING,
    TASKS_INCREMENT_ID,
    SET_CATEGORIES_INTO_TASKS,
    DELETE_CATEGORY_ID,
} from './actionTypes';

export interface ITask {
    id: number;
    title: string;
    description: string;
    categoryId?: number;
    categoryTitle?: string;
}

const initialState = {
    currentId: 0,
    isLoading: false,
    hasErrored: false,
    tasks: [] as Array<ITask>,
    categories: [] as Array<CategoryType>,
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
                currentId: action.tasks.length ? action.tasks[action.tasks.length - 1].id : 0,
            };
        }

        case SET_CATEGORIES_INTO_TASKS: {
            const tasksWithCategories: Array<ITask> = state.tasks.map((task) => {
                for (let i = 0; i < action.categories.length; i++) {
                    const categoryId: number = action.categories[i].id;
                    const categoryTitle: string = action.categories[i].title;

                    if (task.categoryId === categoryId) {
                        task = { ...task, categoryTitle: categoryTitle };
                    }
                }
                return task;
            });
            return {
                ...state,
                tasks: tasksWithCategories,
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

        case DELETE_CATEGORY_ID: {
            const newTasks: Array<ITask> = state.tasks.map((task) => {
                if (task.categoryId === action.id) {
                    task.categoryId = undefined;
                    task.categoryTitle = undefined;
                }
                return task;
            });
            return { ...state, tasks: newTasks };
        }

        default:
            return state;
    }
};

export default tasksReducer;
