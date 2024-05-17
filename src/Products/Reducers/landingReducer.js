import {fetchPromotedproductSuccessActionType} from '../Constants/LandingActionType'

const initialState={
    promotedProducts:[],
}
export const landingReducer = (state=initialState, action) =>{

    // console.log("action.payload", action.payload)

    

    let currentState=state;

    switch(action.type){
        case  fetchPromotedproductSuccessActionType  :
            currentState ={...currentState , promotedProducts: currentState.promotedProducts.concat(action.payload)}

            
        break;
    }

    // console.log("currentStatePromotedproducts", currentState.promotedProducts)

    return currentState;


}