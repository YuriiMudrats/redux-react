import React, { Component } from "react";
import SignUpField from "./SignUpForm";
import { connect } from "react-redux";
import { setForm } from "../../store/actions/";
import PropTypes from "prop-types";

//SignUp page
class SingUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(value) {
    this.props.setForm(value);
  }
  render() {
    const { page, setReq } = this.props;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpField errors={page} onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}
SignUpField.propTypes = {
  setReq: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
};

const mapStateToDispatch = {
  setForm
};
function mapStateToProps(state) {
  return {
    page: state.pageState.errorsSignUp
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SingUp);
