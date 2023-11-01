import { IS_OPEN_SIDEBAR } from '../actions/sidebarControl';

const initialState = {
    isOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_OPEN_SIDEBAR:
            return {
                ...state,
                isOpen: action.payload
            }

        default:
            return state;
    }
};

export default sidebarReducer;
