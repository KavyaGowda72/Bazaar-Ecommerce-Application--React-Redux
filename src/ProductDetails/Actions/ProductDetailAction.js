import { ProductDetailApi } from "../API/productDetailAPI"
import { PRODUCT_DETAIL_FAILURE_ACTION_TYPE, PRODUCT_DETAIL_SUCCESS_ACTION_TYPE } from "../Constants/ActionType";


 export const SingleProductDetailAction = (productId)=>{

    // console.log("productId", productId)
    

    return((dispath)=>{

   const promise = ProductDetailApi(productId);
    promise
    .then((productDetails)=>{
        // console.log("productDetails", productDetails)
        if(productDetails) {
            dispath({ type: PRODUCT_DETAIL_SUCCESS_ACTION_TYPE, payload: productDetails })
        } else {
            dispath({ type: PRODUCT_DETAIL_FAILURE_ACTION_TYPE, payload: null })
        }
    }).catch((error)=>{
        dispath({ type: PRODUCT_DETAIL_FAILURE_ACTION_TYPE, payload: null })
    })

    })

    

}