import { combineReducers } from "redux";
import fetchAllCategory from './products/reducers/fetchAllCategory'
import fetchAllProduct from './products/reducers/fetchAllProduct'
import fetchSpecificCategory from './products/reducers/fetchSpecificCategory'
import fetchSpecificProduct from './products/reducers/fetchSpecificProduct'

// import addCart from './cart/reducers/addCart'
// import deleteCart from './cart/reducers/deleteCart'
// import getUserCart from './cart/reducers/getUserCart'
// import updateCart from './cart/reducers/updateCart'

import search from './search/reducers/search'
import sidebarControl from './sidebar/reducers/sidebarControl'

const index = combineReducers({
    fetchAllProduct: fetchAllProduct,
    fetchAllCategory: fetchAllCategory,
    fetchSpecificProduct: fetchSpecificProduct,
    fetchSpecificCategory: fetchSpecificCategory,
    sidebarControl: sidebarControl,
    search: search,
    // addCart: addCart,
    // deleteCart: deleteCart,
    // getUserCart: getUserCart,
    // updateCart: updateCart
})

export default index