import * as ActionTypes from './actionTypes'

const initialState = {
    isOpenCart: false,
    isOpenCategory: false,
    isOpenCartNotification: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.IS_OPEN_SIDEBAR_CART:
            return {
                ...state,
                isOpenCart: action.payload
            }

        case ActionTypes.IS_OPEN_SIDEBAR_CATEGORY:
            return {
                ...state,
                isOpenCategory: action.payload
            }

        case ActionTypes.IS_OPEN_SIDEBAR_NOTIFICATION:
            return {
                ...state,
                isOpenCartNotification: action.payload
            }

        default:
            return state;
    }
};

export default sidebarReducer;

// need of property value for each sidebar? YES
