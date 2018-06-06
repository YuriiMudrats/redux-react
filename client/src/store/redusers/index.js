import { combineReducers } from "redux";
import { userState } from "./user";
import { pageState } from "./page";
import { routerReducer } from "react-router-redux";
export default combineReducers({
  userState,
  pageState,
  routing: routerReducer
});
