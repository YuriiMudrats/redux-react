import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SingUpPage from "../pages/SingUpPage";
import Protected from "../pages/ProptectPage";

// Routers main content on page
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SingUpPage} />
        <Route path="/protected" component={Protected} />
      </Switch>
    );
  }
}

export default Main;
