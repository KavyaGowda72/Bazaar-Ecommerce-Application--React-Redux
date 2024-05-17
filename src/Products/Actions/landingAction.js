
import {fetchPromotedProductsApi} from '../API/LandingApi'

import {fetchPromotedproductSuccessActionType , fetchPromotedproductFailureActionType} from '../Constants/LandingActionType'

export const fetchLandingProductsAction =()=>{


        // console.log("hellooo")
    

    return ((dispatch)=>{
      
      const promise = fetchPromotedProductsApi();
      promise
      .then((promotedProducts) => {
        
        // console.log("response.promotedProducts",promotedProducts)

        
          
          if(promotedProducts && promotedProducts.length > 0){
            
            // console.log("response.promotedProducts", promotedProducts.status)
             
              dispatch({type :fetchPromotedproductSuccessActionType , payload :promotedProducts})
          }
         
          else{
              dispatch({
                  type : fetchPromotedproductFailureActionType, payload:[]
              })
          }
  
  
      

      }).catch((error) => {
          // console.log('--- errorMessage ', error)
          dispatch({
              type : fetchPromotedproductFailureActionType, payload:[]
          })
      })
     

      


  })
  

      
                                         
  


}

