import React from "react";
import { compose } from "redux";
import { render } from "react-dom";
import App from "./App";
// import { Router, Route, BrowserRouter, browserHistory } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "./src/store/redusers";
import { createStore, applyMiddleware } from "redux";
import PropTypes from "prop-types";
import axios from "axios";
import "./main.scss";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import { rootSagas } from "./src/store/sagas";
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, sagaMiddleware))
);
import { initialize } from "./src/store/actions";

store.dispatch(initialize());
sagaMiddleware.run(rootSagas);
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
