import axios from "axios"

export const ProductDetailApi = async(productId)=>{

    const response = await axios.get("https://dummyjson.com/products")
    // console.log("response", response.data.products)
    // console.log("productId", productId,response.data.products.length)
    let productDetails = null;
    for(let i=0;i<response.data.products.length;i++){
        let product = response.data.products[i];
        // console.log('product,product',product.id)
        if(product.id == productId){
            // console.log('product,product',product)
            productDetails = product;
            break;
        }
    }
// const productDetails1 = response.data.products.filter(product=> product.id == productId)?.[0]
    // console.log("productDetails", productDetails)
    return productDetails;
}