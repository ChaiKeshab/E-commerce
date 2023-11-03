import * as ActionTypes from "./actionTypes";

const createAction = (type, payload) => ({
    type,
    payload,
});

// Logic
/*
Initially, fetch the user's cart data using getUserCart when the cart page loads.
When a user adds an item to the cart, make an API call to addCartItem, and then update the local cart data to reflect the change. This means you update the cart data stored in your application's state immediately, which should be fast and responsive.
Similarly, for deleting and editing cart items, perform the local data update immediately after making the API call
If you need to keep the cart data in sync with the server, consider periodic background synchronization or triggering an API call only when the user initiates actions that require a server update (e.g., proceeding to checkout).
*/

export const getUserCart = (id = 1) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.GET_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts/user/${id}`)
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ActionTypes.GET_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.GET_CART_ERROR, error)))
    };
};


export const addCartItem = (cartItem) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.ADD_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts`, {
            method: "POST",
            // body: cartItem
            body: JSON.stringify(cartItem)
        })
            // .then((res) => res.json())
            // .then((json) => dispatch(createAction(ActionTypes.ADD_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.ADD_CART_ERROR, error)))
    };
};


export const deleteCartItem = (id) => {
    return (dispatch) => {
        dispatch(createAction(ActionTypes.DELETE_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts/${id}`, {
            method: "DELETE",
        })
            // .then((res) => res.json())
            // .then((json) => dispatch(createAction(ActionTypes.DELETE_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ActionTypes.DELETE_CART_ERROR, error)))
    };
};

// api logics 
/*
    // getUserCart is returning the user's all cart item
    // addItem is returning the added item (id = 11)
    // deleteItem is returning the id that i send and [TOTAL BULLSHIT]
*/

export const cartStorage = (itemData) => ({
    type: ActionTypes.GET_CART_ITEM,
    payload: itemData
})

export const updateItem = (product, quantity) => ({
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: { product, quantity },
});

export const removeItem = (productId) => ({
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: productId,
});

export const removeAllItem = () => ({
    type: ActionTypes.REMOVE_CART_ALL,
});
