import React from "react";
import { useDispatch } from "react-redux";
import { AddTocartAction } from "../../Cart/Action/addToCartAction";

const ProductComponent = (props) => {
  const dispatch = useDispatch();

  const onCartClick = (productId, productImage, productName, price) => {
    console.log("---- info ", productId, productImage, productName, price);
    dispatch(AddTocartAction(productId, productImage, productName, price));
  };

  console.log("--- props --- ", props);
  // const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={props.productImage} />
      <div className="id">{props.productId}</div>
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p> ${props.price}</p>
        <p>{props.productDescr}</p>
      </div>
      <button
        className="addToCartBtn"
        onClick={() => {
          console.log("--- **** ");
          onCartClick(
            props.productId,
            props.productImage,
            props.productName,
            props.price
          );
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductComponent;
