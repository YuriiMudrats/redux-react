import React, { Component } from "react";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Protecting page
class ProtectingPage extends Component {
  render() {
    const { isAuth } = this.props;
    return isAuth ? (
      <div>
        <h1> Protecting Page</h1>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

ProtectingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    isAuth: state.pageState.isAuth
  };
}
export default connect(mapStateToProps)(ProtectingPage);
