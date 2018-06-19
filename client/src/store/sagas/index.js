import { setData, setForm, exit, changePage } from "../actions";
import { setLogReq, setReq, GoAway, setProps } from "./sagas";
import { takeEvery } from "redux-saga";
import { all, fork } from "redux-saga/effects";

export function* rootSagas() {
  yield all([fork(watcherLogForm), fork(watcherSignUpForm), fork(watcherExit)]);
}
// yield takeEvery(changePage, setProps)

function* watcherLogForm() {
  yield takeEvery(setForm, setReq);
}
function* watcherSignUpForm() {
  yield takeEvery(setData, setLogReq);
}
function* watcherExit() {
  yield takeEvery(exit, GoAway);
}
