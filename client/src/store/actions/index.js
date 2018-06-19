import axios from "axios";
import { push } from "react-router-redux";
import jwt from "jsonwebtoken";
import config from "../../../../server/config";
import { createAction } from "redux-actions";
import { call, put } from "redux-saga";
// Action criation from redux-action "My action creators  "
export const setData = createAction("SET_DATA_TO_STORE", payload => payload);
export const setForm = createAction("POST_SIGNUP_FORM", payload => payload);
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
export const changePage = createAction("CHANGE_PAGE");
// Send SignUp requst
// export function setReq() {
//   return (dispatch, getState, axios) => {
//     const data = getState().form.SignUpForm.values;
//     axios.post("/api/users/", data).then(
//       res => {
//         const serialValue = JSON.stringify(res.data.jwToken);
//         localStorage.setItem("jwToken", serialValue);
//         dispatch(isLogin(res));
//         dispatch(push("/protected"));
//       },
//       error => {
//         if (error.response.status === 401)
//           dispatch(setErrorSignUp(error.response.data.errors));
//       }
//     );
//     dispatch(setForm());
//   };
// }
// export function* setReq() {
//   yield call(() => {
//     console.log("gen");
//   });

//   try {
//     const data = store.getState().SignUpForm.values;
//     console.log("ya tut");
//     const res = yield call(() => axios.post("/api/users/", data));
//     yield call(res => {
//       const serialValue = JSON.stringify(res.data.jwToken);
//       localStorage.setItem("jwToken", serialValue);
//     });
//     yield put(isLogin(res));
//     yield put(push("/protected"));
//   } catch (error) {
//     if (error.response.status === 401)
//       yield put(setErrorSignUp(error.response.data.errors));
//   }
// }

// Send login requst
// export function setLogReq() {
//   return (dispatch, setState, axios) => {
//     const data = setState().form.logForm.values;
//     console.log(data);
//     axios.post("/api/users/log", data).then(
//       res => {
//         const serialValue = JSON.stringify(res.data.jwToken);
//         localStorage.setItem("jwToken", serialValue);
//         dispatch(userInfo(res.data.userInfo));
//         dispatch(isLogin(res));
//         dispatch(push("/protected"));
//       },
//       error => {
//         if (error.response.data.errors) {
//           dispatch(setErrorLogin(error.response.data.errors));
//         }

//         if (error.response.data.isReg) {
//           dispatch(push("/signup"));
//         }
//       }
//     );
//     dispatch(setForm());
//     dispatch(clearStore());
//   };
// }

// export function* setLogReq(){
//   const data = store.getState().SignUpForm.values;
//   try{
//     const res = yield call((data) => {
//       axiox.post("/api/users/log", data)
//     })
//     yield call((res)=>{
//       const serialValue = JSON.stringify(res.data.jwToken);
//       localStorage.setItem("jwToken", serialValue)
//     })
//     yield put(userInfo(res.data.userInfo))
//     yield put(isLogin(res))
//     yield put(push("/protected"))
//   }
//   catch(error){
//     if (error.response.data.errors){
//       yield put(setErrorLogin(error.response.data.errors))
//     }
//     if (error.response.data.isReg){
//       yield put(push("/signup"))
//     }

//   }
// }

// remove my token in localStore
// export function* GoAway() {
//   yield call(() => localStorage.removeItem("jwToken"));
// }
// // JWT token decoded

// export function setProps() {
//   return (dispatch, setState) => {
//     if (localStorage.getItem("jwToken")) {
//       var token = JSON.parse(localStorage.getItem("jwToken"));
//       var decoded = jwt.verify(token, config.secret);
//       console.log(decoded + " my token");
//       dispatch(redirect());
//       decoded ? dispatch(push("/protected")) : dispatch(push("/"));
//     }
//   };
// }

// export function* setProps(){
//   if (localStorage.getItem("jwToken")) {
//     var token = JSON.parse(localStorage.getItem("jwToken"));
//     var decoded = jwt.verify(token, config.secret);
//     console.log(decoded + " my token");
//     yield put(redirect());
//     if (decoded) { yield put(push("/protected"))}
//     yield put(push("/"));
//   }
// }
