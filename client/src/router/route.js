import { Route, Redirect } from "react-router-dom";
import React from "react";
import Protected from "../pages/ProptectPage";

//Protect router
const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route {...rest} component={Protected} />;
};

export default PrivateRoute;
