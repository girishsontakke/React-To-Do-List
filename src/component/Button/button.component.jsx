import React from "react";

import Button from "@material-ui/core/Button";

const CustomButton = ({ children, ...otherProps }) => (
  <Button variant="contained" color="primary" {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
