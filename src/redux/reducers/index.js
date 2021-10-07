import { combineReducers } from "redux";
import { productReducer, selecetedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts:productReducer,
    product:selecetedProductReducer,


});

export default reducers