import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { setData, setLogReq } from "../../store/actions/";

//Form page
class LoginPage extends Component {
  render() {
    const { pageErrors, setData, setLogReq } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm
            errors={pageErrors}
            setData={setData}
            setLogReq={setLogReq}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { pageErrors: state.pageState };
}
const mapStateToDispatch = {
  setData,
  setLogReq
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(LoginPage);
