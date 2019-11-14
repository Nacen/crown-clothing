import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        type={otherProps.type}
        value={otherProps.value}
        required={otherProps.required}
        name={otherProps.name}
        onChange={handleChange}
      />
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
};

export default FormInput;
