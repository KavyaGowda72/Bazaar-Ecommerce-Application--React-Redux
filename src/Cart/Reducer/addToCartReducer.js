import { ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_SUCCESS } from "../Constants/addCartActionType"

const initialState={
    cartItems:[]
}
export const AddToCartReducer=(state=initialState, action)=>{
    console.log("action.payload",action.payload)
    let currentState=state

    switch(action.type){
        case ADD_PRODUCTS_SUCCESS:
            currentState={...currentState, cartItems:currentState.cartItems.concat(action.payload)}
        break;
        case ADD_PRODUCTS_FAILURE:
            currentState={...currentState, cartItems:null}

    }
    console.log("currentState", currentState)

    return currentState
}