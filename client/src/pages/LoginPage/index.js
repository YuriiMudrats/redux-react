import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect, dispatch } from "react-redux";
import { setData } from "../../store/actions";
import { setLogReq } from "../../store/sagas";

//Form page
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(value) {
    this.props.setData(value);
  }
  render() {
    const { pageErrors } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm onSubmit={this.onSubmit} errors={pageErrors} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { pageErrors: state.pageState };
}
const mapStateToDispatch = {
  setLogReq,
  setData
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(LoginPage);
