import axios from "axios";
import { push } from "react-router-redux";
import jwt from "jsonwebtoken";
import config from "../../../../server/config";
import { createAction } from "redux-actions";

// Action criation from redux-action "My action"
export const setData = createAction("SET_DATA_TO_STORE", payload => payload);
export const setForm = createAction("POST_SIGNUP_FORM", payload => payload);
export const changeState = createAction("MERGE_PROPS");
export const setErrorSignUp = createAction(
  "SHOW_ERRORS_SIGNUP",
  payload => payload
);
export const setErrorLogin = createAction(
  "SHOW_ERRORS_LOGIN",
  payload => payload
);
export const isSuccessRes = createAction("PUSH_TO_PROTECT_PAGE");
export const isLogin = createAction("IS_LOGIN", payload => payload);
export const exit = createAction("GO_AWAY");
export const redirect = createAction("REDIRECT", payload => payload);
export const initialize = createAction("INITIALIZE");
export const clearStore = createAction("CLEAR_STORE");
export const userInfo = createAction("USER_INFO", userInfo => userInfo);
// Send SignUp requst
export function setReq() {
  return (dispatch, setState, axios) => {
    const data = setState().form.SignUpForm.values;
    axios.post("/api/users/", data).then(
      res => {
        const serialValue = JSON.stringify(res.data.jwToken);
        localStorage.setItem("jwToken", serialValue);
        dispatch(isLogin(res));
        dispatch(push("/protected"));
      },
      error => {
        if (error.response.status === 401)
          dispatch(setErrorSignUp(error.response.data.errors));
      }
    );

    dispatch(setForm());
  };
}
// Send login requst
export function setLogReq() {
  return (dispatch, setState, axios) => {
    const data = setState().form.logForm.values;
    console.log(data);
    axios.post("/api/users/log", data).then(
      res => {
        const serialValue = JSON.stringify(res.data.jwToken);
        localStorage.setItem("jwToken", serialValue);
        dispatch(userInfo(res.data.userInfo));
        dispatch(isLogin(res));
        dispatch(push("/protected"));
      },
      error => {
        if (error.response.data.errors) {
          dispatch(setErrorLogin(error.response.data.errors));
        }

        if (error.response.data.isReg) {
          dispatch(push("/signup"));
        }
      }
    );

    dispatch(setForm());
    dispatch(clearStore());
  };
}
// remove my token in localStore
export function GoAway() {
  return (dispatch, setState) => {
    localStorage.removeItem("jwToken");
    dispatch(exit());
  };
}
// JWT token decoded

export function setProps() {
  return (dispatch, setState) => {
    if (localStorage.getItem("jwToken")) {
      var token = JSON.parse(localStorage.getItem("jwToken"));
      var decoded = jwt.verify(token, config.secret);
      console.log(decoded + " my token");
      dispatch(redirect());
      decoded ? dispatch(push("/protected")) : dispatch(push("/"));
    }
  };
}
