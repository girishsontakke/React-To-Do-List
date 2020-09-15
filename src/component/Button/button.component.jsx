import React from "react";

import Button from "@material-ui/core/Button";

const CustomButton = ({ children, ...otherProps }) => (
  <Button
    disabled={!otherProps.input}
    variant="contained"
    color="primary"
    {...otherProps}
  >
    {children}
  </Button>
);

export default CustomButton;
