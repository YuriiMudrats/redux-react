import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
import jwt from "jsonwebtoken";
import { setErrorLogin, userInfo, isLogin, exit } from "../actions";
import config from "../../../../server/config";

export function* setReq({ payload }) {
  try {
    console.log(payload);
    const res = yield call(axios.post, "/api/users/", payload);
    console.log("res");
    const serialValue = JSON.stringify(res.data.jwToken);
    localStorage.setItem("jwToken", serialValue);
    yield put(isLogin(res));
    yield put(push("/protected"));
  } catch (error) {
    if (error.response.status === 401)
      yield put(setErrorSignUp(error.response.data.errors));
  }
}

export function* setLogReq({ payload }) {
  try {
    console.log(payload);
    const res = yield call(axios.post, "/api/users/log", payload);
    const serialValue = JSON.stringify(res.data.jwToken);
    localStorage.setItem("jwToken", serialValue);

    yield put(userInfo(res.data.userInfo));
    yield put(isLogin(res));
    yield put(push("/protected"));
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      yield put(setErrorLogin(error.response.data.errors));
    }
    if (error.response.data.isReg) {
      yield put(push("/signup"));
    }
  }
}

export function* GoAway() {
  yield call(() => localStorage.removeItem("jwToken"));
}
export function* setProps() {
  if (localStorage.getItem("jwToken")) {
    var token = JSON.parse(localStorage.getItem("jwToken"));
    var decoded = jwt.verify(token, config.secret);
    console.log(decoded + " my token");
    yield put(redirect());
    if (decoded) {
      yield put(push("/protected"));
    }
    yield put(push("/"));
  }
}
