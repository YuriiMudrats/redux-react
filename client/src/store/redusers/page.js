import { handleActions } from "redux-actions";
import {
  setErrorSignUp,
  setErrorLogin,
  isLogin,
  exit,
  initialize,
  redirect
} from "../actions";
import { Record } from "immutable";
const initState = Record({
  isLoading: false,
  isAuth: false,
  errorsSignUp: null,
  errorsLogin: null,
  initialaze: false
});

export const pageState = handleActions(
  {
    [setErrorSignUp]: (state, { payload }) =>
      state.set("errorsSignUp", payload),
    [setErrorLogin]: (state, { payload }) => state.set("errorsLogin", payload),
    [isLogin]: (
      state,
      {
        payload: {
          data: { isAuth }
        }
      }
    ) => state.set("isAuth", isAuth),
    [exit]: state => state.set("isAuth", false),
    [initialize]: state => state.set("initialaze", true),
    [redirect]: state => state.set("isAuth", true)
  },
  initState()
);
