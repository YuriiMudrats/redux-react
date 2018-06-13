import React, { Component } from "react";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserList from "../../components/UserList";
// Protecting page
class ProtectingPage extends Component {
  render() {
    const { isAuth, userInfo } = this.props;
    console.log(userInfo);
    return isAuth ? <UserList userInfo={userInfo} /> : <Redirect to="/login" />;
  }
}

ProtectingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    isAuth: state.pageState.isAuth,
    userInfo: state.userState.userInfo
  };
}
export default connect(mapStateToProps)(ProtectingPage);
