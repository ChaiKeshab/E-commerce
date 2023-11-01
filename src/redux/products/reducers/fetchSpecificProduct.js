import {
    FETCH_SPECIFIC_PRODUCTS_LOADING,
    FETCH_SPECIFIC_PRODUCTS_SUCCESS,
    FETCH_SPECIFIC_PRODUCTS_ERROR,
} from '../actions/fetchSpecificProduct';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const SpecificProductReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SPECIFIC_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SPECIFIC_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };

        case FETCH_SPECIFIC_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default SpecificProductReducer;
