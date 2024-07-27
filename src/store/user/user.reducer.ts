import { Reducer } from "redux";
import { INITIAL_STATE, UserState } from "./user.state";
import { SET_CURRENT_USER, UserAction } from "./user.actions";

export const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action): UserState => {
  const { type } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};