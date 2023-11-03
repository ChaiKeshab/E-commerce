import * as ActionTypes from "./actionTypes";

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload
            }








        case 'UPDATE_CART_ITEM':
            {
                const { product, quantity } = action.payload;
                state.cart = state.cart.map((item) => {
                    if (item.product.id === product.id) {
                        return {
                            ...item,
                            quantity: quantity
                        }
                    }
                    return item
                })
                return { ...state };
            }

        case 'REMOVE_CART_ITEM':
            {
                const productId = action.payload;
                state.cart = state.cart.filter((item) => item.product.id !== productId);
                console.log(state.cart, 'imstate')
                return { ...state };
            }




        case ActionTypes.ADD_CART_LOADING:
        case ActionTypes.DELETE_CART_LOADING:
        case ActionTypes.GET_CART_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };


        case ActionTypes.GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
            };

        case ActionTypes.ADD_CART_ERROR:
        case ActionTypes.DELETE_CART_ERROR:
        case ActionTypes.GET_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default cartReducer;
