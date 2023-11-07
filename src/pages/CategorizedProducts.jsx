import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { fetchSpecificCategory, cleanUpSpecificCategory } from '../redux/index'
import { GridProducts, CategorizedSkeleton } from "../components/index"
import { useOutletContext, useParams } from "react-router-dom"


const Products = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)
    const subsequentApiCallRef = useRef(false)
    const { id } = useParams()
    // const outletObj = useOutletContext()


    const specificCategoryArr = useSelector((state) => state.productRelatedReducer.specificCategory, shallowEqual)
    const specificCategoryLoading = useSelector((state) => state.productRelatedReducer.loading, shallowEqual)
    console.log(specificCategoryArr, 'specCatArr')

    useEffect(() => {
        console.log('specUseCatArr', id)
        // preventing double api call.
        dispatch(fetchSpecificCategory(id))

        return () => {
            dispatch(cleanUpSpecificCategory())
        }

    }, [dispatch, id])


    return (
        <div className="Category pt-5">

            <div className="grid p-4 gap-4 pt-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {specificCategoryLoading ? <CategorizedSkeleton /> : (

                    specificCategoryArr.map(item => (

                        <GridProducts
                            key={item.id}
                            {...item}
                            loading={specificCategoryLoading}
                        />
                    ))
                )}
            </div>


        </div>
    )
}

export default Products
