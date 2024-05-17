import React, { useEffect, useState } from "react";

import "../../Common/Styles/Common.css";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PromotedproductComponent from "../../Common/Components/PromotedproductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchLandingProductsAction } from "../Actions/landingAction";
import MenuComponent, {
  SearchAppBar,
} from "../../Common/Components/MenuComponent";
import { Menu } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LandingProducts = () => {
  // const [promotedProducts] = useState([]);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchLandingProductsAction());
  }, []);

  const mapStateToProps = (state) => {
    return state.landingData;
  };

  let landingData = useSelector(mapStateToProps);

  // console.log("landingData", landingData);

  // console.log("dbvdhchdcbj");
  // console.log("reduxState_landingData", reduxState.landingData);

  return (
    <div className="pp-products">
      <MenuComponent />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          // columns={{ xs: 4, sm: 8, md: 12 }}
          rowGap={3}
          margin={10}
          columnGap={8}
        >
          {landingData.promotedProducts.map((promotedProduct, i) => {
            return (
              <Grid
                item
                key={("landing_product", i)}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <PromotedproductComponent products={promotedProduct.products} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default LandingProducts;
