import { combineReducers, createStore, compose } from 'redux';
import categoryReducer from './categories/reducer';
import tasksReducer from './tasks/reducer';

const rootReducer = combineReducers({
    categoryList: categoryReducer,
    taskList: tasksReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
// @ts-ignore
window.store = store;

export default store;
