import { userInfo } from "../actions";
import { handleActions } from "redux-actions";
import { Record } from "immutable";
const UserState = Record({ userInfo: null });

export const userState = handleActions(
  {
    [userInfo]: (state, { payload }) => state.set("userInfo", payload)
  },
  UserState()
);
