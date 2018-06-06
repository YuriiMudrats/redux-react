import { setData, clearStore } from "../actions";
import { handleActions } from "redux-actions";
const initialState = {
  username: "",
  password: "",
  email: "",
  passwordConfirm: "",
  timezone: ""
};
export const userState = handleActions(
  {
    [setData]: (state, { payload }) => ({
      ...state,
      [payload.target.name]: payload.target.value
    }),
    [clearStore]: (state, { payload }) => ({
      ...state,
      username: "",
      password: "",
      email: "",
      passwordConfirm: "",
      timezone: ""
    })
  },
  initialState
);

// export default function userState(state = initialState, { type, payload }) {
//   switch (type) {
//     case SET_DATA_TO_STORE:
//       return Object.assign(state, {
//         [payload.target.name]: payload.target.value
//       });
//     case CLEAR_STORE:
//       return Object.assign({}, state, {
//         username: "",
//         password: "",
//         email: "",
//         passwordConfirm: "",
//         timezone: ""
//       });
//     default:
//       return state;
//   }
// }
