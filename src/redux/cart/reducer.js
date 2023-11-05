import * as ActionTypes from "./actionTypes";

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.GET_CART_ITEM:
            return {
                ...state,
                cart: action.payload
            }


        case ActionTypes.UPDATE_CART_ITEM:
            {
                const { product, quantity } = action.payload;

                const isCartItemExist = state.cart.findIndex((item) => item.product.id === product.id);

                if (isCartItemExist !== -1) {
                    state.cart = state.cart.map((item) => {
                        if (item.product.id === product.id) {
                            return {
                                ...item,
                                quantity: quantity
                            }
                        }
                        return item
                    })

                } else {
                    state.cart = [...state.cart, { product, quantity }]
                    return { ...state }
                }
                return { ...state };
            }



        case ActionTypes.REMOVE_CART_ITEM:
            {
                const productId = action.payload;
                state.cart = state.cart.filter((item) => item.product.id !== productId);
                return { ...state };
            }



        case ActionTypes.REMOVE_CART_ALL:
            {
                return { ...state, cart: [] }
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
