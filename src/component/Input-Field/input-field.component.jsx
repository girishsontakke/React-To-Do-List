import React from "react";

const InputField = ({ label, handleOnChange, ...otherProps }) => (
  <>
    <input onChange={handleOnChange} {...otherProps} />
    {label ? (
      <div className="label">
        <label for={otherProps.id}> {label} </label>
      </div>
    ) : null}
  </>
);

export default InputField;
