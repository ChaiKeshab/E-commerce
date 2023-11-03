import { useEffect } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { cartStorage } from '../redux/index';
import { Dropdown, Button } from '../components/index';

const Cart = () => {
    const dispatch = useDispatch();

    const reduxCartItems = useSelector((state) => state.cartRelatedReducer.cart, shallowEqual);
    const [localCartItems, setLocalCartItems] = useLocalStorage('cart', []);

    const cartItems = reduxCartItems.length > 0 ? reduxCartItems : localCartItems;


    useEffect(() => {
        if (reduxCartItems.length === 0 && localCartItems.length > 0) {
            dispatch(cartStorage(localCartItems));
        }
    }, [localCartItems, dispatch, reduxCartItems]);



    // SAME FUNCTION USED IN ProductDetails. Custom Hook?
    const updateQuantityFn = (product, quantity) => {
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);

        if (existingCartItem) {
            // if alredy exists, update it
            const updatedCartItems = cartItems.map((item) => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: quantity,
                    };
                }
                return item;
            });

            dispatch(cartStorage(updatedCartItems));
            setLocalCartItems(updatedCartItems);

        } else {
            //else add it
            dispatch(cartStorage([...cartItems, { product, quantity }]));
            setLocalCartItems([...cartItems, { product, quantity }]);
        }
    };


    const handleRemoveCartItem = (productId) => {
        const filteredCartItem = cartItems.filter((item) => item.product.id !== productId)
        // deleting means updating the Cart with new data
        dispatch(cartStorage(filteredCartItem));
        setLocalCartItems(filteredCartItem);
        console.log(cartItems, 'page')
    }



    return (
        <div className="mx-auto mb-5 md:p-7 lg:h-screen">

            <h1 className="text-4xl h-[10vh] font-semibold">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row">

                <div className="lg:h-[88vh] overflow-auto lg:w-2/3">
                    {cartItems.length > 0 ? (

                        <div className="grid grid-cols-1 gap-4">

                            {cartItems.map((cartItem) => (
                                <div
                                    key={cartItem.product.id}
                                    className="bg-white p-4 border-y"
                                >

                                    <div className="flex flex-col items-center
                                    md:flex-row">

                                        <div className="flex w-[150px] aspect-[1/1.2] items-center justify-center p-1 flex-shrink-0
                                        md:w-[200px] md:p-4">

                                            <img className="block aspect-square w-full object-contain transform transition-all duration-150"
                                                src={cartItem.product.image} alt="Product"
                                            />

                                        </div>

                                        <div className="flex flex-col items-start justify-center p-4 w-full">

                                            <h1 className="text-primary text-2xl font-semibold text-left">
                                                {cartItem.product.title}
                                            </h1>
                                            <p className="text-primary text-2xl font-bold">${cartItem.product.price}</p>


                                            <div className="flex mt-2 gap-4 flex-wrap">

                                                <div className="group bg-customGrey rounded-md px-2 shadow-[0px_3px_5px_rgba(0,0,0,0.3)] hover:bg-customGrey-hover">
                                                    <Dropdown
                                                        onChange={(e) => updateQuantityFn(cartItem.product, parseInt(e.target.value, 10))}
                                                        className={'bg-customGrey rounded-md p-2 group-hover:bg-customGrey-hover'}
                                                        label={'Quantity'}
                                                        id={cartItem.product.id}
                                                        name={'Quantity'}
                                                        value={cartItem.quantity}
                                                        options={Array.from({ length: 25 }, (_, index) => ({
                                                            value: index + 1,
                                                            label: (index + 1).toString(),
                                                        }))}
                                                    />

                                                </div>

                                                <Button
                                                    onClick={() => handleRemoveCartItem(cartItem.product.id)}
                                                    className="bg-red-600 py-2 text-white px-10 rounded-md flex-shrink-0 hover:bg-red-800 shadow-[0px_3px_5px_rgba(0,0,0,0.3)]">
                                                    <div>Remove</div>
                                                </Button>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-5xl">
                            Your cart is empty.
                        </div>
                    )}

                    <div className="mt-4">
                    </div>
                </div>


                {cartItems.length > 0 &&
                    <div className="flex flex-col flex-grow px-5">
                        {cartItems.length > 0 && (
                            <div className="text-primary text-2xl font-semibold">
                                Total: ${cartItems.reduce((acc, item) => (acc + item.product.price * item.quantity), 0).toFixed(2)}
                            </div>
                        )}
                        <div className="Checkout flex lg:w-1/3">Checkout</div>
                    </div>
                }

            </div>
        </div >
    );
};

export default Cart;
