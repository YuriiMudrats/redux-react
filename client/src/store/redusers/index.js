import { combineReducers } from "redux";
import { userState } from "./user";
import { pageState } from "./page";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  form: formReducer,
  pageState,
  userState,
  routing: routerReducer
});
