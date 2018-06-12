import { userInfo } from "../actions";
import { handleActions } from "redux-actions";
import { Record, Map } from "immutable";
const initialState = new Record({ userInfo: null });

export const userState = handleActions(
  { [userInfo]: (state, { payload }) => initialState.set("userInfo", payload) },
  initialState
);
