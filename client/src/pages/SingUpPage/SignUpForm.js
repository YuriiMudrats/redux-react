import React, { Component } from "react";
import time from "../../data/timezone";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import validateInput from "../../../../server/shared/validations/signup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SelectField from "../../components/Select";
import { reduxForm, Field } from "redux-form";

// SignUp form
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.setReq();
  }
  render() {
    const { errors, timezone } = this.props;
    console.log(errors);
    return (
      <form onSubmit={this.onSubmit}>
        <h2>SignUpForm</h2>
        <Field
          name="username"
          type="text"
          label="Username"
          id="usernamesf"
          component={Input}
          errors={errors}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          id="emailsf"
          component={Input}
          errors={errors}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          id="passwordsf"
          component={Input}
          errors={errors}
        />
        <Field
          name="passwordConfirm"
          type="password"
          label="PasswordConfirming"
          id="passwordConfirmsf"
          component={Input}
          errors={errors}
        />
        <Field
          name="timezone"
          timezone={time}
          label="PasswordConfirming"
          component={SelectField}
          errors={errors}
        />
        <Button buttonName="Sing Up" />
      </form>
    );
  }
}

SignUpForm.propTypes = {
  setData: PropTypes.func.isRequired,
  setReq: PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
  router: PropTypes.object
};
const SignUpField = reduxForm({
  form: "SignUpForm"
})(SignUpForm);
export default SignUpField;
