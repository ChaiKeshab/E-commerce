import { combineReducers } from "redux";

import productReducer from './products/reducer'
import sidebarReducer from './sidebar/reducer'

import searchReducer from './search/reducer'

const index = combineReducers({
    productRelatedReducer: productReducer,
    sidebarRelatedReducer: sidebarReducer,
    searchReducer: searchReducer,

})

export default index