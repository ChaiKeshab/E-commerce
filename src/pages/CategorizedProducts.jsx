import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { fetchSpecificCategory } from '../redux/index'
import { GridProducts } from "../components/index"
import { useOutletContext, useParams } from "react-router-dom"


const Products = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)
    const { id } = useParams()
    const outletObj = useOutletContext()


    const specificCategoryArr = useSelector((state) => state.fetchSpecificCategory.category, shallowEqual)
    const specificCategoryLoading = useSelector((state) => state.fetchSpecificCategory.loading, shallowEqual)


    useEffect(() => {
        // preventing double api call.
        if (apiCallRef.current === false) {
            dispatch(fetchSpecificCategory(id))
        }

        return () => {
            apiCallRef.current = true
        }

    }, [dispatch, id])


    return (
        <div className="HOME pt-5">

            <p>{outletObj.qsearch}</p>
            <div className="grid p-4 gap-4 pt-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {specificCategoryArr.map(item => (
                    <GridProducts
                        key={item.id}
                        {...item}
                        loading={specificCategoryLoading}
                    />
                ))}

            </div>


        </div>
    )
}

export default Products
