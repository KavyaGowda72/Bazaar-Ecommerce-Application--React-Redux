import axios from "axios"



export const fetchProductsApi = async()=>{
  
  
  const response= await axios.get("https://dummyjson.com/products")
 

  // console.log("response.....", response)

  return (
      
       response  
  )
    
    
  
  
  




  


  

        // return({
        //     status : "success",
        //     Products : [
        //       {
        //         id: 1,
                
        //         productName: "IPhone",
        //         price: 999.0,
        //         productImage: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SR360,240_QL70_.jpg",
        //       },
        //       {
        //         id: 2,
        //         productName: "Cap",
        //         price: 20,
        //         productImage: "https://m.media-amazon.com/images/I/51N7F6WLDqL._AC_UL480_FMwebp_QL65_.jpg",
        //       },
        //       {
        //         id: 3,
        //         productName: "Camera",
        //         price: 800.0,
        //         productImage: "https://m.media-amazon.com/images/I/61+5Ld-oc1L._AC_SR360,240_QL70_.jpg",
        //       },
        //       {
        //         id: 4,
        //         productName: "Led Lights",
        //         price: 200.0,
        //         productImage: "https://m.media-amazon.com/images/I/51PSyPk+IKL._AC_UL480_FMwebp_QL65_.jpg",
        //       },
        //       {
        //         id: 5,
        //         productName: "Kid-Shirt",
        //         price: 20.0,
        //         productImage: "https://m.media-amazon.com/images/I/81rRjFLdeZL._AC_SR360,240_QL70_.jpg",
        //       },
        //       {
        //         id: 6,
        //         productName: "Laptop",
        //         price: 1000.0,
        //         productImage: "https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_UY327_FMwebp_QL65_.jpg",
        //       },
        //       {
        //         id: 7,
        //         productName: "Sweatshirt",
        //         price: 70.0,
        //         productImage: "https://m.media-amazon.com/images/I/51BBUbU1gGL._AC_SR360,240_QL70_.jpg",
        //       },
        //       {
        //         id: 8,
        //         productName: "Watches",
        //         price: 24.0,
        //         productImage: "https://m.media-amazon.com/images/I/51CGkN7MBNL._AC_SR405%2C405_.jpg",
        //       },
        //     ]
        // })

        

}