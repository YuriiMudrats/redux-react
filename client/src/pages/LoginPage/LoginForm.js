import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

//Login form
class SyncLoginForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.setLogReq();
  }

  render() {
    const errors = this.props.errors.errorsLogin;

    console.log(errors);
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login </h2>
        <Field
          name="email"
          type="email"
          label="Email"
          id="emaillf"
          component={Input}
          errors={errors}
        />
        <Field
          name="password"
          type="password"
          id="passwordlf"
          component={Input}
          label="Password"
          errors={errors}
        />
        <Button buttonName="Login" />
      </form>
    );
  }
}
const LoginForm = reduxForm({
  form: "logForm"
})(SyncLoginForm);

export default LoginForm;
