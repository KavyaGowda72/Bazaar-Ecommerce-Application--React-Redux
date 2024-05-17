import React from "react";
import { Typography } from "@mui/material";

const LabelComponent = (props) => {
  return (
    <Typography variant={props.labelVariant ? props.labelVariant : "caption"}>
      {props.text}
    </Typography>
  );
};

export default LabelComponent;
