import React from "react";

import "./header.styles.scss";
import CustomButton from "../../component/Button/button.component";
import InputField from "../../component/Input-Field/input-field.component";

const Header = ({ handleSubmit, ...otherProps }) => (
  <div className="header">
    <form className="form" onSubmit={handleSubmit}>
      <InputField type="text" id="to-do" {...otherProps} className="input" />
      <CustomButton type="submit"> Add </CustomButton>
    </form>
  </div>
);

export default Header;
