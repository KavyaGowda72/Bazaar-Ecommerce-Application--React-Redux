import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"

const Cart =()=>{

       
        let cartValue=localStorage.getItem('cart')
        let cart=null;

        if(cartValue){
            cart=JSON.parse(cart)
         }


         useEffect(()=>{

            window.location =`\cart`

         },[cart])

         




         console.log("cartCheck",cart )
    

  
     const mapStateToprops=(state)=>{
        return state.cartData
         }

    const cartData=useSelector(mapStateToprops)
    console.log("cartData", cartData)

    





    return(


        // <div>
           {/* {cartData.cartItems.map((cartItem, index)=>{
            <>
                <Typography  
                    productId={cartItem.id}
                />
                <Typography  
                    productimage={cartItem.thumbnail}
                />
                <Typography  
                    productTille={cartItem.title}
                />
                <Typography  
                    productPrice={cartItem.price}
                />
                
            </>
                
           })}
           
        </div> */}
    )

}

export default Cart