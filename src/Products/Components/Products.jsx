import ProductComponent from "./ProductComponent";
import "../Styles/products.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAction } from "../Actions/ProductsActions";
import LabelComponent from "../../Common/Components/LabelComponent";
import MenuComponent from "../../Common/Components/MenuComponent";

const Products = () => {
  const dispatch = useDispatch();

  const onProductClick = (productId) => {
    window.location = `/products/${productId}`;
  };

  useEffect(() => {
    // console.log("Calling effect");
    dispatch(fetchProductsAction());
  }, []);

  const mapStateToProps = (state) => {
    return state.productData;
  };

  let productData = useSelector(mapStateToProps);
  // console.log("Checking_products", productData.ProductsList);

  return (
    <div className="shop">
      <MenuComponent />
      <div className="shopTitle">
        <h2>Shop products</h2>
      </div>

      <div className="products">
        {productData.ProductsList.map((product, i) => (
          <div
            onClick={() => {
              onProductClick(product.id);
            }}
          >
            <ProductComponent
              key={i}
              productImage={product.thumbnail}
              productId={`Id : ${product.id}`}
              productName={product.title}
              price={product.price}
              // productDescr={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
