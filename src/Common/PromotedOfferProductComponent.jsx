import React from "react";
import LabelComponent from "./Components/LabelComponent";
import { Typography } from "@mui/material";
import "../Common/Styles/Common.css";

function PromotedOfferProductComponent(props) {
  return (
    <>
      <div className="product-container">
        <div className="image">
          <img src={props.productImage} />
        </div>

        <div className="title">
          <LabelComponent text={props.productTitle} />
        </div>
        <div className="price">
          <LabelComponent text={props.productPrice} />
        </div>
        <div className="discount">
          <LabelComponent text={props.offerValue} />
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            {props.about}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default PromotedOfferProductComponent;
