import LabelComponent from "../Common/Components/LabelComponent";
import "./Styles/productDetail.css";

const ProductDetailComponent = (props) => {
  // console.log("props", props);

  return (
    <div className="ProductDetail">
      <div className="productId">{props.productId}</div>
      <div className="prodetailimg">
        <img src={props.productDetailImage} alt="prodetailimg" />
      </div>
      <div className="Prodetails">
        <p>
          <b>{props.productDetailTitle}</b>
        </p>
        <p>$ {props.productDetailPrice}</p>
        <div className="descr">
          <p>{props.ProductDetailDescription}</p>
        </div>
        <br />
        <div>
          <button
            className="addcartbtn"
            onClick={
              props.onCartClick
                ? props.onCartClick
                : () => {
                    console.log("Provide onclick handler");
                  }
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
