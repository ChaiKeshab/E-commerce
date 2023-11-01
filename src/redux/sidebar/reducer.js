import * as ActionTypes from './actionTypes'

const initialState = {
    isOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_OPEN_SIDEBAR:
            return {
                ...state,
                isOpen: action.payload
            }

        default:
            return state;
    }
};

export default sidebarReducer;
