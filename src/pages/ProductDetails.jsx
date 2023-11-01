import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { fetchSpecificProduct } from '../redux/index'
import { useParams } from "react-router-dom"
import { Spinner, Button } from '../components/index'


const ProductDetails = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)
    const { id } = useParams()


    const specificProductObj = useSelector((state) => state.fetchSpecificProduct.products, shallowEqual)
    const specificProductLoading = useSelector((state) => state.fetchSpecificProduct.loading, shallowEqual)

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
                    <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                    <p className="text-gray-600">{category}</p>
                    <p className="text-2xl text-blue-500 font-bold mt-2">${price}</p>
                    <p className="mt-2">{description}</p>

                    <Button />

                </div>
            </div>

        </div>

    )
}

export default ProductDetails