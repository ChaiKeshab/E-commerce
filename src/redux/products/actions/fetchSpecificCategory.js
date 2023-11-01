export const FETCH_SPECIFIC_CATEGORY_LOADING = 'FETCH_SPECIFIC_CATEGORY_LOADING';
export const FETCH_SPECIFIC_CATEGORY_SUCCESS = 'FETCH_SPECIFIC_CATEGORY_SUCCESS';
export const FETCH_SPECIFIC_CATEGORY_ERROR = 'FETCH_SPECIFIC_CATEGORY_ERROR';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchSpecificCategory = (category) => {
    return (dispatch) => {
        dispatch(createAction(FETCH_SPECIFIC_CATEGORY_LOADING));

        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json())
            .then((json) => dispatch(createAction(FETCH_SPECIFIC_CATEGORY_SUCCESS, json)))
            .catch((error) => dispatch(createAction(FETCH_SPECIFIC_CATEGORY_ERROR, error)))
    };
};
