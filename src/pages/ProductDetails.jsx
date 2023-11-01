import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { useParams } from "react-router-dom"
import { Spinner, Button, Dropdown } from '../components/index'
import {
    fetchSpecificProduct,
    addCartItem,
    deleteCartItem,
    getUserCart,
} from '../redux/index'


const ProductDetails = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)
    const { id } = useParams()


    const specificProductObj = useSelector((state) => state.productRelatedReducer.specificProducts, shallowEqual)
    const specificProductLoading = useSelector((state) => state.productRelatedReducer.loading, shallowEqual)

    const { image, title, category, price, description } = specificProductObj

    useEffect(() => {
        // preventing double api call.
        if (apiCallRef.current === false) {
            dispatch(fetchSpecificProduct(id))
        }

        return () => {
            apiCallRef.current = true
        }

    }, [dispatch, id])


    const handleAddToCart = () => {
        const itemData = {
            userId: 5,
            date: Date.now(),
            products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
        }
        dispatch(addCartItem(itemData))

    }

    return (

        <div className="product-page">

            <div className="h-full flex flex-col items-center justify-center 
            md:flex-row">

                <div className="flex w-[600px] aspect-[1/1.2] items-center justify-center p-4">

                    {specificProductLoading ?
                        <div className="flex items-center justify-center ">
                            <Spinner className='block w-40 h-40' />
                        </div>

                        : (<img className="block p-5 aspect-square w-full object-contain transform transition-all duration-150"
                            src={image} alt="Product" />)}
                </div>

                <div className="p-4 md:w-full">

                    <div className="my-4">
                        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                        <p className="text-gray-600">{category}</p>
                        <p className="text-2xl text-blue-500 font-bold mt-2">${price}</p>
                        <p className="mt-2">{description}</p>
                    </div>

                    <div>
                        <Dropdown></Dropdown>

                        <Button
                            onClick={handleAddToCart}
                            className="bg-customGrey px-5 py-2 rounded-full hover:bg-customGrey-hover flex-shrink-0">
                            <div>Add to Cart</div>
                        </Button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProductDetails