import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// @ts-ignore
window.store = store;

export default store;
