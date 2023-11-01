export const FETCH_SPECIFIC_PRODUCTS_LOADING = 'FETCH_SPECIFIC_PRODUCTS_LOADING';
export const FETCH_SPECIFIC_PRODUCTS_SUCCESS = 'FETCH_SPECIFIC_PRODUCTS_SUCCESS';
export const FETCH_SPECIFIC_PRODUCTS_ERROR = 'FETCH_SPECIFIC_PRODUCTS_ERROR';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchSpecificProduct = (id) => {
    return (dispatch) => {
        dispatch(createAction(FETCH_SPECIFIC_PRODUCTS_LOADING));

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => dispatch(createAction(FETCH_SPECIFIC_PRODUCTS_SUCCESS, json)))
            .catch((error) => dispatch(createAction(FETCH_SPECIFIC_PRODUCTS_ERROR, error)))
    };
};
