import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LabelComponent from "./LabelComponent";
// import "../Styles/Common.css";
import PromotedOfferProductComponent from "../PromotedOfferProductComponent";
import Box from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const promotedProductComponent = (props) => {
  const onProductClick = (productId) => {
    window.location = `/products/${productId}`;
  };
  return (
    <>
      <Card sx={{ maxWidth: 330 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={5}
          // alignItems="center"
          justifyContent="center"
        >
          {props.products.map((product, j) => {
            return (
              <Grid item xs={5} key={("offer_product", j)}>
                <div
                  onClick={() => {
                    onProductClick(product.id);
                  }}
                >
                  <PromotedOfferProductComponent
                    productImage={product.thumbnail}
                    productTitle={product.title}
                    // productPrice={product.price}
                    offerValue={` ${product.discountPercentage} off`}
                    // about={product.description}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Card>
      {/* </Grid> */}
    </>
  );
};

export default promotedProductComponent;

// **********************************************
/* <Grid container rowSpacing={1}>
        {props.products.map((product, j) => {
          console.log("product", product);

          return (
            <Grid item xs={5}>
              <Card>
                <CardContent>
                  <PromotedOfferProductComponent
                    productImage={product.image}
                    offerValue={product.discount}
                    about={product.description}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </> */
