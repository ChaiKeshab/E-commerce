import {
    FETCH_CATEGORY_LOADING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR,
} from '../actions/fetchAllCategory';

const initialState = {
    category: [],
    loading: false,
    error: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
            };

        case FETCH_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default categoryReducer;
