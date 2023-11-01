import * as ActionTypes from "./actionTypes";

const initialState = {
    allProducts: [],
    specificProducts: [],
    allCategory: [],
    specificCategory: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CATEGORY_LOADING:
        case ActionTypes.FETCH_PRODUCTS_LOADING:
        case ActionTypes.FETCH_SPECIFIC_CATEGORY_LOADING:
        case ActionTypes.FETCH_SPECIFIC_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case ActionTypes.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                allCategory: action.payload,
            };

        case ActionTypes.FETCH_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                allProducts: action.payload,
            };

        case ActionTypes.FETCH_SPECIFIC_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                specificCategory: action.payload,
            };

        case ActionTypes.FETCH_SPECIFIC_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ActionTypes.FETCH_SPECIFIC_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                specificProducts: action.payload,
            };

        case ActionTypes.FETCH_SPECIFIC_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default productReducer;
