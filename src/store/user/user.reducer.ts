import { Reducer } from "redux";
import { INITIAL_STATE, UserState } from "./user.state";
import { UserAction } from "./user.actions";
import { UserActionType } from "./user.types";

export const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action): UserState => {
  const { type } = action;
  switch (type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case UserActionType.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case UserActionType.SIGN_OUT_FAILED:
    case UserActionType.SIGN_IN_FAILED:
    case UserActionType.SIGN_UP_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
