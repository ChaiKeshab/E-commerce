export const FETCH_PRODUCTS_LOADING = 'FETCH_PRODUCTS_LOADING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProductsLoading = () => ({
    type: FETCH_PRODUCTS_LOADING,
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
});

export const fetchAllProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductsLoading());

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => dispatch(fetchProductsSuccess(json)))
            .catch((error) => dispatch(fetchProductsError(error)))
    }
}
