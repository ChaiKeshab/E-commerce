export const FETCH_CATEGORY_LOADING = 'FETCH_CATEGORY_LOADING';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchAllCategory = () => {
    return (dispatch) => {
        dispatch(createAction(FETCH_CATEGORY_LOADING));

        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => dispatch(createAction(FETCH_CATEGORY_SUCCESS, json)))
            .catch((error) => dispatch(createAction(FETCH_CATEGORY_ERROR, error)))
    };
};
