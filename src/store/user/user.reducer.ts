import { Reducer } from "redux";
import { INITIAL_STATE, UserState } from "./user.state";
import { UserAction } from "./user.actions";
import { SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT_FAILED, SIGN_OUT_SUCCESS, SIGN_UP_FAILED } from "./user.types";

export const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action): UserState => {
  const { type } = action;
  switch (type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case SIGN_OUT_FAILED:
    case SIGN_IN_FAILED:
    case SIGN_UP_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
