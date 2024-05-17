import { fetchProductsApi } from "../API/ProductsApi"

import { fetchProductsFailureActionType, fetchProductsSuccessActionType } from "../Constants/ProductsActionType";


 export const fetchProductsAction=()=>{
    // let status1="success";

    return ((dispatch)=>{
      
        const promise = fetchProductsApi();
        promise
        .then((response) => {
            // console.log('--- responsesssss ', response.status);

            if(response.status === 200){
                // console.log("response.status",response)
                dispatch({type :fetchProductsSuccessActionType , payload :response.data.products})
            }
           
            else if(response.status ==400){
                dispatch({
                    type : fetchProductsFailureActionType, payload:[]
                })
            }
    
    
            // console.log("after action", response.data)
            // console.log("action_products", response.data)

        }).catch((error) => {
            // console.log('--- error ', error)
            dispatch({
                type : fetchProductsFailureActionType, payload:[]
            })
        })
       

        


    })
    

}

