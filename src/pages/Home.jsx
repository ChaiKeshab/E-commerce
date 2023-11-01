import { useEffect, useRef } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { fetchAllCategory } from '../redux/index'
import { Carousel, GridCategory } from "../components/index"


const Home = () => {

    const dispatch = useDispatch()
    const apiCallRef = useRef(false)

    const categoryArr = useSelector((state) => state.fetchAllCategory.category, shallowEqual)

    useEffect(() => {
        // preventing double api call.
        if (apiCallRef.current === false) {
            dispatch(fetchAllCategory())
        }

        return () => {
            apiCallRef.current = true
        }

    }, [dispatch])

    const categoryImage = [
        "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    ]


    return (
        <div className="HOME">

            <div className="h-[400px]">
                <Carousel
                    images={categoryArr.map(image => image.image)}
                />
            </div>

            <div className="grid p-4 gap-4 pt-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {categoryArr.map((item, index) => (
                    <GridCategory
                        key={index}
                        category={item}
                        image={categoryImage[index]}
                    />
                ))}

            </div>


        </div>
    )
}

export default Home