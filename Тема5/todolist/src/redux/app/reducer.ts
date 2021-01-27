import { OPEN_CREATE_MODAL, OPEN_EDIT_MODAL } from './actionTypes';

interface IInitialState {
    isTask: boolean;
}

const initialState = {
    isTask: false,
};

const appReducer = (state: IInitialState = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default appReducer;
