export const FETCH_PRODUCTS_LOADING = 'FETCH_PRODUCTS_LOADING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchAllProduct = () => {
    return (dispatch) => {
        dispatch(createAction(FETCH_PRODUCTS_LOADING));

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => dispatch(createAction(FETCH_PRODUCTS_SUCCESS, json)))
            .catch((error) => dispatch(createAction(FETCH_PRODUCTS_ERROR, error)))
    };
};
