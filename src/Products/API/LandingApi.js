import axios from "axios"
import Products from "../Components/Products"

export const fetchPromotedProductsApi = async () =>{

  const response = await axios.get("https://dummyjson.com/products")

  // console.log("response",response)

  const promotedProducts=[];


  

  for(let i=0; i< response.data.products.length;i++){
    let product=response.data.products[i];
    // console.log("product", product)

    let isFound=false;

    for(let j=0;j<promotedProducts.length;j++){
      let promotedProduct=promotedProducts[j];
     
    if(product.category === promotedProduct.category){
      // console.log("promotedProductChecking", promotedProduct)
      isFound=true;
      promotedProduct.products.push(product);
    
    }
    

  }


    if(!isFound){

      const newPromotedProduct = {
        category : product.category,
        products: [product]


      }
    
      promotedProducts.push(newPromotedProduct)
      // console.log("checkingnewPromotedProduct", newPromotedProduct)

    } 
     
    
   
    

  }


return promotedProducts


 

    
  





  
//     return({
//         // status : "success",
//         promotedProducts : 
//         [
//             {
//             products: [
//               {
                
//                 image:
//                   "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_372X232_3X7._SY232_CB602731451_.jpg",
//                 discount: "20 off",
//               },
//               {
//                 image:
//                   "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Feb/BTF/MFD/Prime/Shoes_hi_res_revised_._SY232_CB583006556_.jpg",
//                 discount: "30 off",
//               },
//               {
//                 image:
//                   " https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Feb/BTF/MFD/Prime/Pcqc3-3-hi._SY232_CB583006556_.jpg",
//                 discount: "10 off",
//               },
//               {
//                 image:
//                   "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Feb/BTF/MFD/Prime/Pcqc3-4-hi._SY232_CB583006556_.jpg",
//                 discount: " 25 off",
//               },
//             ],
       
//      },
//      {
//       products: [
//         {
//           image:
//             "https://m.media-amazon.com/images/I/71P2Mqn4JpL._AC_SY220_.jpg",
//           discount: "20 off",
//         },
//         {
//           image:
//             "https://m.media-amazon.com/images/I/81jEhhAm3wL._AC_SY220_.jpg",
//           discount: "30 off",
//         },
//         {
//           image:
//             "https://m.media-amazon.com/images/I/71IMRfhh96L._AC_SY220_.jpg",
//           discount: "10 off",
//         },
//         {
//           image: 
//             "https://m.media-amazon.com/images/I/81umrV0eeSL._AC_SY220_.jpg",
//           discount: " 25 off",
//         },
//       ],
 
// }

//     ] })

  }
    



