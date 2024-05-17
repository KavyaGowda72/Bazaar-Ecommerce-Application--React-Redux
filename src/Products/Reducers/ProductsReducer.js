import { fetchProductsFailureActionType, fetchProductsSuccessActionType } from "../Constants/ProductsActionType";


const initialState={
    ProductsList:[]
}
export const ProductsReducer=(state=initialState, action)=>{

    // console.log("new json data .......",action.payload)


            let currentState=state;
            // console.log("initia", currentState.Products)

            switch(action.type){
                case fetchProductsSuccessActionType:
                    currentState={...currentState, ProductsList: currentState.ProductsList.concat(action.payload)}

                    break;
                    
                // case fetchProductsFailureActionType:
                //     currentState=[]
                //     break;
            }

            // console.log("currentStateproducts", currentState.Products)

            return currentState;


            
}