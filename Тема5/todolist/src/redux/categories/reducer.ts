import {
    ADD_CATEGORY,
    CATEGORIES_INCREMENT_ID,
    CATEGORIES_IS_LOADING,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    SET_CATEGORIES,
} from './actionTypes';
export interface CategoryType {
    id: number;
    title: string | '';
    description: string | '';
}

interface InitialStateType {
    currentId: number;
    categories: Array<CategoryType>;
    isLoading: boolean;
}

export const initialState: InitialStateType = {
    currentId: 0,
    categories: [] as Array<CategoryType>,
    isLoading: false,
};

// export type InitialStateType = typeof initialState;

const categoryReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case CATEGORIES_IS_LOADING: {
            return { ...state, isLoading: action.isLoading };
        }

        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories,
                currentId: action.categories.length
                    ? action.categories[action.categories.length - 1].id
                    : 0,
            };
        }

        case DELETE_CATEGORY: {
            return {
                ...state,
                categories: state.categories.filter((item) => item.id !== action.id),
            };
        }

        case ADD_CATEGORY: {
            if (action.payload.title !== '') {
                return { ...state, categories: [...state.categories, action.payload] };
            }
            return state;
        }

        case CATEGORIES_INCREMENT_ID: {
            return { ...state, currentId: state.currentId + 1 };
        }

        case EDIT_CATEGORY: {
            const newCategories: Array<CategoryType> = state.categories.map((item) => {
                if (item.id === action.updatedCategory.id) {
                    item = action.updatedCategory;
                }

                return item;
            });

            return {
                ...state,
                categories: newCategories,
            };
        }

        default:
            return state;
    }
};

export default categoryReducer;
