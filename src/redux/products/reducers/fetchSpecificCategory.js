import {
    FETCH_SPECIFIC_CATEGORY_LOADING,
    FETCH_SPECIFIC_CATEGORY_SUCCESS,
    FETCH_SPECIFIC_CATEGORY_ERROR,
} from '../actions/fetchSpecificCategory';

const initialState = {
    category: [],
    loading: false,
    error: null,
};

const SpecificCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SPECIFIC_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_SPECIFIC_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
            };

        case FETCH_SPECIFIC_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default SpecificCategoryReducer;
