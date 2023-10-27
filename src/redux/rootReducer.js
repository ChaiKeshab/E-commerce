import { combineReducers } from "redux";
import fetchAllProduct from './reducers/products/fetchAllProduct'
import search from './reducers/search/search'

const index = combineReducers({
    fetchAllProduct: fetchAllProduct,
    search: search
})

export default index