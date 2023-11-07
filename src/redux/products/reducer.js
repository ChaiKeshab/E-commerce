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

        case ActionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
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




        // CLEAN-UP
        case ActionTypes.CLEANUP_PRODUCTS_DATA:
            return {
                allProducts: [],
                loading: false,
                error: null,
            }

        case ActionTypes.CLEANUP_SPECIFIC_PRODUCTS_DATA:
            return {
                specificProducts: [],
                loading: false,
                error: null,
            }

        case ActionTypes.CLEANUP_CATEGORY_DATA:
            return {
                allCategory: [],
                loading: false,
                error: null,
            }


        case ActionTypes.CLEANUP_SPECIFIC_CATEGORY_DATA:
            return {
                specificCategory: [],
                loading: false,
                error: null,
            }


        default:
            return state;
    }
};

export default productReducer;
