export const ADD_CART_LOADING = 'ADD_CART_LOADING';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_ERROR = 'ADD_CART_ERROR';

const createAction = (type, payload) => ({
    type,
    payload,
});

export const fetchSpecificProduct = (id) => {
    return (dispatch) => {
        dispatch(createAction(ADD_CART_LOADING));

        fetch(`https://fakestoreapi.com/carts`, {
            method: "POST",
            body: JSON.stringify(
                {
                    userId: 5,
                    date: 2020-02-03,
                    products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
                }
            )
        })
            .then((res) => res.json())
            .then((json) => dispatch(createAction(ADD_CART_SUCCESS, json)))
            .catch((error) => dispatch(createAction(ADD_CART_ERROR, error)))
    };
};

fetch('https://fakestoreapi.com/carts'
    .then(res => res.json())
    .then(json => console.log(json))