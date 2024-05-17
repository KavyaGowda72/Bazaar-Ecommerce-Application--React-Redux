import { applyMiddleware, combineReducers } from "redux";
import {createStore} from "redux";
import {thunk} from "redux-thunk";
import { landingReducer } from "../Products/Reducers/landingReducer";
import { ProductsReducer } from "../Products/Reducers/ProductsReducer";

import { productDetailReducer } from "../ProductDetails/Reducers/productDetailReducer";
import { AddToCartReducer } from "../Cart/Reducer/addToCartReducer";




const reducer=combineReducers({
    landingData: landingReducer,
    productData: ProductsReducer,
   
    productDetailData:productDetailReducer,
    cartData:AddToCartReducer
    

})



export const store=createStore(reducer, applyMiddleware(thunk));
