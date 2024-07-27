import { Reducer } from "redux";
import { INITIAL_STATE, UserState } from "./user.state";
import { UserAction } from "./user.actions";
import { SET_CURRENT_USER } from "./user.types";

export const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action): UserState => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
