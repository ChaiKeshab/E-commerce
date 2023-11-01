import * as ActionTypes from "./actionTypes";

const createAction = (type, payload) => ({
    type,
    payload,
});

export const addCartItem = (cartItem) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.ADD_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts`, {
            method: "POST",
            body: cartItem
            // body: JSON.stringify(
            //     {
            //         userId: 1,
            //         date: 2020-02-03,
            //         products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
            //     }
            // )
        })
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.ADD_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.ADD_CART_ERROR, error)))
    };
};


export const deleteCartItem = (id) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.DELETE_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.DELETE_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.DELETE_CART_ERROR, error)))
    };
};



export const getUserCart = (id = 1) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.GET_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts/user/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.GET_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.GET_CART_ERROR, error)))
    };
};
