import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isOpenSidebar, cartStorage, updateItem, removeItem, removeAllItem } from '../../redux/index'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { useEffect, useRef } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';
import { Dropdown, Button } from '../../components/index';




const CartSidebar = () => {

    // const navigate = useNavigate(); 
    const dispatch = useDispatch()
    const reduxUpdatesLocalRef = useRef(false)
    const localUpdatesReduxRef = useRef(false)

    const isSidebarOpen = useSelector(state => state.sidebarRelatedReducer.isOpen)

    const reduxCartItems = useSelector((state) => state.cartRelatedReducer.cart, shallowEqual);
    const [localCartItems, setLocalCartItems] = useLocalStorage('cart', []);

    const cartItems = reduxCartItems.length > 0 ? reduxCartItems : localCartItems;


    useEffect(() => {
        if (localUpdatesReduxRef.current === false) {
            dispatch(cartStorage(localCartItems));
        }

        return () => {
            localUpdatesReduxRef.current = true
        }

    }, [localCartItems, dispatch])



    useEffect(() => {
        if (reduxUpdatesLocalRef.current === true) {
            setLocalCartItems(reduxCartItems);
        }

        return () => {
            reduxUpdatesLocalRef.current = true
        }

    }, [setLocalCartItems, reduxCartItems]);




    const updateQuantityFn = (product, quantity) => {
        dispatch(updateItem(product, quantity));
    }


    const handleRemoveCartItem = (productId) => {
        dispatch(removeItem(productId))
    }


    const handleRemoveAllItem = () => {
        dispatch(removeAllItem())
    }


    const toggleSidebar = () => {
        dispatch(isOpenSidebar(!isSidebarOpen))
    }


    return (
        <>
            <div
                className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
                bg-white px-9 fixed right-0 top-0 pb-10 h-screen w-full shadow-2xl transform z-50 ease-in-out duration-500
                md:w-2/3 lg:w-[40%] xl:1/3`}
            >

                <div className=" px-6 h-[10vh] flex justify-between border-b">

                    <h1 className="w-1/2 py-6 h-full">Shopping Cart ({cartItems.length})</h1>

                    <div className="w-1/2 py-6 h-full inline-block text-end cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </div>
                </div>



                <div className="flex flex-col">
                    <div className="h-[60vh] overflow-auto grid grid-cols-1 gap-4">

                        {cartItems.length > 0 &&

                            cartItems.map((cartItem) => (

                                <div
                                    key={cartItem.product.id}
                                    className="bg-white p-4 border-b"
                                >
                                    <div className="flex flex-row items-center">


                                        <Link to={`/products/${cartItem.product.id}`}
                                            className="flex w-[80px] aspect-[1/1.2] items-center justify-center p-1 flex-shrink-0">

                                            <img className="block aspect-square w-full object-contain transform transition-all duration-150"
                                                src={cartItem.product.image} alt="Product"
                                            />
                                        </Link>


                                        <div className="flex flex-col items-start justify-center p-4 w-full">

                                            <h1 className="text-primary text-xl font-semibold text-left">
                                                {cartItem.product.title}
                                            </h1>
                                            <p className="text-primary text-2xl font-bold">${cartItem.product.price}</p>


                                            <div className="flex mt-2 gap-4 flex-wrap">

                                                <div className="group bg-customGrey rounded-md px-2 hover:bg-customGrey-hover">
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
                                                    className="bg-red-600 py-2 text-white px-10 rounded-md flex-shrink-0 hover:bg-red-800">
                                                    <div>Remove</div>
                                                </Button>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                            ))}
                    </div>




                    <div className="flex justify-between items-center text-primary text-lg py-5 font-semibold">
                        <h2>
                            TOTAL: ${cartItems.reduce((acc, item) => (acc + item.product.price * item.quantity), 0).toFixed(2)}
                        </h2>

                        <Button
                            onClick={handleRemoveAllItem}
                            className="bg-red-600 py-2 text-white px-10 rounded-md flex-shrink-0 hover:bg-red-800">
                            <div>Remove All</div>
                        </Button>
                    </div>



                    <div className="flex flex-col gap-6 items-center">

                        <Link onClick={toggleSidebar} to={'/cart'}
                            className="w-full text-center bg-customGrey hover:bg-customGrey-hover rounded-sm shadow-[0px_3px_5px_rgba(0,0,0,0.3)]"
                        >
                            <Button
                                className=" py-3 text-black font-semibold px-10">
                                <div>View Cart</div>
                            </Button>
                        </Link>

                        <Link onClick={toggleSidebar} to={'/cart'}
                            className="w-full text-center bg-blue-500 hover:bg-teal-500 rounded-sm shadow-[0px_3px_5px_rgba(0,0,0,0.3)]"
                        >
                            <Button
                                className=" py-3 text-white font-semibold px-10">
                                <div>Checkout</div>
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>


            {isSidebarOpen && (
                <div
                    className="BACKGROUND z-10 w-full fixed h-screen overflow-hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
        // bg-black opacity-10
    );
};

export default CartSidebar;


