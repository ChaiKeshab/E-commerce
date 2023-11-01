import * as ActionTypes from "./actionTypes";

const initialState = {
    cart: [], // You can define your initial state here
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART_LOADING:
        case ActionTypes.DELETE_CART_LOADING:
        case ActionTypes.GET_CART_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case ActionTypes.ADD_CART_SUCCESS:
        case ActionTypes.DELETE_CART_SUCCESS:
        case ActionTypes.GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload, // Assuming this is the cart data you receive
            };

        case ActionTypes.ADD_CART_ERROR:
        case ActionTypes.DELETE_CART_ERROR:
        case ActionTypes.GET_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default cartReducer;
