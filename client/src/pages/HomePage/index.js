import React, { Component } from "react";
import { connect } from "react-redux";
import { changePage } from "../../store/actions";

// Start page
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-page-main">
        <h1> Start Page</h1>
      </div>
    );
  }
}

const mapStateToDispatch = {
  changePage
};

export default connect(
  null,
  mapStateToDispatch
)(HomePage);
