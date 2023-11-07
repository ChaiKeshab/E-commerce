import axios from 'axios';
import * as ActionTypes from './actionTypes';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchAllCategory = () => {
    return async (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_CATEGORY_LOADING));

        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            dispatch(createAction(ActionTypes.FETCH_CATEGORY_SUCCESS, response.data));
        } catch (error) {
            dispatch(createAction(ActionTypes.FETCH_CATEGORY_ERROR, error));
        }
    };
};

export const cleanUpAllCategory = () => createAction(ActionTypes.CLEANUP_CATEGORY_DATA);

export const fetchAllProduct = () => {
    return async (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_PRODUCTS_LOADING));

        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(createAction(ActionTypes.FETCH_PRODUCTS_SUCCESS, response.data));
        } catch (error) {
            dispatch(createAction(ActionTypes.FETCH_PRODUCTS_ERROR, error));
        }
    };
};

export const cleanUpAllProduct = () => createAction(ActionTypes.CLEANUP_PRODUCTS_DATA);

let called = 1;
export const fetchSpecificCategory = (category) => {
    console.log(`specificCategory API called ${called}`);
    called += 1;

    return async (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_LOADING));

        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_SUCCESS, response.data));
        } catch (error) {
            dispatch(createAction(ActionTypes.FETCH_SPECIFIC_CATEGORY_ERROR, error));
        }
    };
};

export const cleanUpSpecificCategory = () => createAction(ActionTypes.CLEANUP_SPECIFIC_CATEGORY_DATA);

export const fetchSpecificProduct = (id) => {
    return async (dispatch) => {
        dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_LOADING));

        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_SUCCESS, response.data));
        } catch (error) {
            dispatch(createAction(ActionTypes.FETCH_SPECIFIC_PRODUCTS_ERROR, error));
        }
    };
};

export const cleanUpSpecificProduct = () => createAction(ActionTypes.CLEANUP_SPECIFIC_PRODUCTS_DATA);
