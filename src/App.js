import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingProducts from "./Products/Components/LandingProducts";

import Products from "./Products/Components/Products";

import { LandingProductsDetail } from "./ProductDetails/LandingProductsDetail";
import Cart from "./Cart/Cart";








function App() {
  
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<LandingProducts/>}/>
        <Route path="/landingproducts" element={<LandingProducts/>}/>
        <Route path="/products/:productId" element={<LandingProductsDetail/>}/>
       
        
        <Route path="/products" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>}/>
       
        
      
        
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
