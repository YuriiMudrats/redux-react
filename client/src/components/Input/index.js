import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import Alert from "../Alert";
const InputField = ({ input, value, type, eventInput, id, label, errors }) => {
  return (
    <div className="form-group">
      <Label label={label} id={id} />
      <input
        {...input}
        id={id}
        type={type}
        value={value}
        className="form-control"
        onChange={eventInput}
      />
      {errors ? <Alert error={errors.email} /> : null}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.object,
  eventInput: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
InputField.displayName = "InputField";
InputField.defaultProps = {
  type: "text"
};

export default InputField;
