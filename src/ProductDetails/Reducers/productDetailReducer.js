import { PRODUCT_DETAIL_FAILURE_ACTION_TYPE, PRODUCT_DETAIL_SUCCESS_ACTION_TYPE } from "../Constants/ActionType";

const initialState ={
    productDetail: null,
}

export const productDetailReducer =(state=initialState, action)=>{
    // console.log("action.payload", action.payload)

        let currentState=state

        switch(action.type){
            case PRODUCT_DETAIL_SUCCESS_ACTION_TYPE:
                currentState={...currentState, productDetail: action.payload};
                break;
                
            case PRODUCT_DETAIL_FAILURE_ACTION_TYPE :
                currentState={...currentState, productDetail: null};
        }

        // console.log("currentState.productDetail",currentState)
        return currentState


}
