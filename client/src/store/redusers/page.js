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
const initialState = {
  isLoading: false,
  isAuth: false,
  errorsSignUp: null,
  errorsLogin: null,
  initialaze: false
};

export const pageState = handleActions(
  {
    [setErrorSignUp]: (state, { payload }) => ({
      ...state,
      errorsSignUp: payload
    }),
    [setErrorLogin]: (state, { payload }) => ({
      ...state,
      errorsLogin: payload
    }),
    [isLogin]: (state, { payload }) => ({
      ...state,
      isAuth: payload.data.isAuth
    }),
    [exit]: (state, { payload }) => ({
      ...state,
      isAuth: false
    }),
    [initialize]: (state, { payload }) => ({
      ...state,
      initialaze: true
    }),
    [redirect]: (state, { payload }) => ({
      ...state,
      isAuth: true
    })
  },
  initialState
);
