import { DELETE_CATEGORY } from './actionTypes';
export type CategoryType = {
    id: number;
    title: string;
    description: string;
};

export const initialState = {
    categories: [
        {
            id: 1,
            title: 'Категория 1',
            description: 'Описание категории 1',
        },
        {
            id: 2,
            title: 'Категория 2',
            description: 'Описание категории 2',
        },
        {
            id: 3,
            title: 'Категория 3',
            description: 'Описание категории 3',
        },
        {
            id: 4,
            title: 'Категория 4',
            description: 'Описание категории 4',
        },
        {
            id: 5,
            title: 'Категория 5',
            description: 'Описание категории 5',
        },
        {
            id: 6,
            title: 'Категория 6',
            description: 'Описание категории 6',
        },
        {
            id: 7,
            title: 'Категория 7',
            description: 'Описание категории 7',
        },
    ] as Array<CategoryType>,
};

export type InitialStateType = typeof initialState;

const categoryReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case DELETE_CATEGORY: {
            return {
                ...state,
                categories: state.categories.filter((item) => item.id !== action.id),
            };
        }

        default:
            return state;
    }
};

export default categoryReducer;
