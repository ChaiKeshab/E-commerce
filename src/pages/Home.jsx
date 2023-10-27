import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllProduct } from '../redux/actions/index'


const Home = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.fetchAllProduct.products)



    console.log(data)
    return (
        <div>

        </div>
    )
}

export default Home