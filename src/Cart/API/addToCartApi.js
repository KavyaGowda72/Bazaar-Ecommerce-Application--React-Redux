

export const AddToCartApi= async(productId, productImage, productName, price)=>{
    
    const cartItem={productId, productImage, productName, price}

    let cart;
    let cartValue=localStorage.getItem('cart')

   

    if(cartValue){

        cart=JSON.parse(cartValue)
        cart.push(cartItem)

        cartValue=JSON.stringify(cart)
        localStorage.setItem('cart', cartValue)
    }
    else{
        cart=[cartItem]
        cartValue=JSON.stringify(cart)
        localStorage.setItem('cart', cartValue)
    }

    console.log("cart", cart)


    return cart



    

}