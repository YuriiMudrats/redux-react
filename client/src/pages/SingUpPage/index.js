import React, { Component } from "react";
import SignUpField from "./SignUpForm";
import { connect } from "react-redux";
import { setData, setReq } from "../../store/actions/";
import PropTypes from "prop-types";

//SignUp page
class SingUp extends Component {
  render() {
    const { page, setReq } = this.props;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpField errors={page} setData={setData} setReq={setReq} />
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
  setData,
  setReq
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
