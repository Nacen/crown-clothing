import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input type={otherProps.type} value={otherProps.value} required={otherProps.required} name={otherProps.name} className="form-input" onChange={handleChange} />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
