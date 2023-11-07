import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useParams } from "react-router-dom"
import { Button, Dropdown, ProductDetailsSkeleton } from '../components/index'
import {
    fetchSpecificProduct,
    cartStorage,
    updateItem,
    cleanUpSpecificProduct
} from '../redux/index'

import useLocalStorage from '../hooks/useLocalStorage'


const ProductDetails = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)
    const reduxUpdatesLocalRef = useRef(false)

    const localUpdatesReduxRef = useRef(false)

    const { id } = useParams()


    const specificProductObj = useSelector((state) => state.productRelatedReducer.specificProducts, shallowEqual)
    const specificProductLoading = useSelector((state) => state.productRelatedReducer.loading, shallowEqual)
    const reduxCartItems = useSelector((state) => state.cartRelatedReducer.cart, shallowEqual);

    const [localCartItems, setLocalCartItems] = useLocalStorage('cart', [])

    if (specificProductObj) { var { image, title, category, price, description } = specificProductObj }

    const cartItems = reduxCartItems.length > 0 ? reduxCartItems : localCartItems;

    const [isCartItemAdded, setisCartItemAdded] = useState('')


    const [quantityAmount, setQuantityAmount] = useState(1)




    //API CALL
    console.log(id, 'product')
    useEffect(() => {
        dispatch(fetchSpecificProduct(id))
        console.log('yolo')
        return () => {
            apiCallRef.current = true
        }
    }, [dispatch, id])








    //UPDATING REDUX CART THROUGH LOCAL STORAGE ON PAGE RELOAD
    useEffect(() => {
        if (localUpdatesReduxRef.current === false) dispatch(cartStorage(localCartItems))

        return () => localUpdatesReduxRef.current = true

    }, [localCartItems, dispatch])


    useEffect(() => {
        if (reduxUpdatesLocalRef.current === true) setLocalCartItems(reduxCartItems)

        return () => reduxUpdatesLocalRef.current = true

    }, [setLocalCartItems, reduxCartItems]);





    const handleAddToCart = (product, quantity) => {
        dispatch(updateItem(product, quantity));

        const doesExists = cartItems.findIndex((item) => item.product.id === product.id);

        if (doesExists === -1) setisCartItemAdded("Added")
        else setisCartItemAdded("Updated")

        setTimeout(() => {
            setisCartItemAdded('');
        }, 1000);
    };


    return (
        <>
            {specificProductLoading ? <ProductDetailsSkeleton /> : (

                <div className="product-page">
                    <div className="h-full flex flex-col items-center justify-center 
                        md:flex-row">

                        <div className="flex w-[400px] aspect-[1/1.2] items-center justify-center p-4
                            md:w-[600px]">

                            <img className="block p-5 aspect-square w-full object-contain transform transition-all duration-150"
                                src={image} alt="Product"
                            />

                        </div>

                        {/* <div className="flex items-center justify-center ">
                            <ProductDetailsSkeleton />
                        </div> */}

                        <div className="p-4 md:w-full">

                            <div className="my-4">
                                <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                                <p className="text-gray-600">{category}</p>
                                <p className="text-2xl text-blue-500 font-bold mt-2">${price}</p>
                                <p className="mt-2">{description}</p>
                            </div>

                            <div className="relative flex gap-4 flex-wrap items-center justify-start">

                                <div className="group w-fit flex-shrink-0 bg-customGrey rounded-full px-4 shadow-[0px_3px_5px_rgba(0,0,0,0.3)] hover:bg-customGrey-hover">
                                    <Dropdown
                                        disabled={isCartItemAdded ? true : false}
                                        onChange={(e) => setQuantityAmount(parseInt(e.target.value, 10))} //10: radix/base 10(decimal)
                                        className={'bg-customGrey rounded-md p-2 group-hover:bg-customGrey-hover'}
                                        label={'Quantity'}
                                        id={specificProductObj.id}
                                        name={'Quantity'}
                                        value={quantityAmount}
                                        options={Array.from({ length: 25 }, (_, index) => ({
                                            value: index + 1,
                                            label: (index + 1).toString(),
                                        }))}
                                    />
                                </div>

                                <Button
                                    disabled={isCartItemAdded ? true : false}
                                    onClick={() => handleAddToCart(specificProductObj, quantityAmount)}
                                    className="bg-blue-500 text-white px-10 py-2 rounded-full shadow-[0px_3px_5px_rgba(0,0,0,0.3)] hover:bg-teal-500 flex-shrink-0">
                                    <div>Add to Cart</div>
                                </Button>

                                {isCartItemAdded &&
                                    <div
                                        className="onDisplay-animation bg-green-500 text-white px-10 py-2 rounded-full shadow-[0px_3px_5px_rgba(0,0,0,0.3)
                                    absolute bottom-0 left-0 translate-y-[130%]"
                                    >
                                        {isCartItemAdded}
                                    </div>}
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default ProductDetails

// const itemData = {
//     userId: 1,
//     date: Date.now(),
//     products: [{
//         productId: productId,
//         quantity: quantity
//     }]
// }
// dispatch(addCartItem(itemData))