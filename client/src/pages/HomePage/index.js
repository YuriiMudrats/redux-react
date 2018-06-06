import React, { Component } from "react";
import { connect } from "react-redux";
import { setProps } from "../../store/actions";

// Start page
class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setProps();
  }

  render() {
    return (
      <div>
        <h1> Start Page</h1>
      </div>
    );
  }
}

const mapStateToDispatch = {
  setProps
};

export default connect(
  null,
  mapStateToDispatch
)(HomePage);
