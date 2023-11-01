import * as ActionTypes from "./actionTypes";

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchAllCategory = () => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_CATEGORY_LOADING));

        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.FETCH_CATEGORY_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.FETCH_CATEGORY_ERROR, error)))
    };
};


export const fetchAllProduct = () => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_PRODUCTS_LOADING));

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.FETCH_PRODUCTS_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.FETCH_PRODUCTS_ERROR, error)))
    };
};


export const fetchSpecificCategory = (category) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_LOADING));

        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_ERROR, error)))
    };
};


export const fetchSpecificProduct = (id) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_LOADING));

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_ERROR, error)))
    };
};
