import { AddToCartApi } from "../API/addToCartApi";
import { ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_SUCCESS } from "../Constants/addCartActionType";

export const AddTocartAction=(productId, productImage, productName, price)=>{
    // console.log("productImage", productImage)

        return((dispatch)=>{
            const promise= AddToCartApi(productId, productImage, productName, price);
            
            promise.then((cart)=>{
                console.log("cart", cart)
                if(cart){
                dispatch({type : ADD_PRODUCTS_SUCCESS, payload:cart})
                
                }else{
                dispatch({type:ADD_PRODUCTS_FAILURE , payload:null })
                }
             } ).catch((error)=>{
                dispatch({type:ADD_PRODUCTS_FAILURE , payload:null })
            })

         })
        
        }
    

