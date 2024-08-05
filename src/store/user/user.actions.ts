import { User } from "@core/domain/entities";
import { Dispatch } from "redux";
import { SET_CURRENT_USER } from "./user.types";

export const UserAction = (dispatch: Dispatch<UserAction>) => {
  return {
    setCurrentUser: (user: User | null) => {
      dispatch({ type: SET_CURRENT_USER, payload: user });
    },
  };
};

export type UserAction = Action<typeof SET_CURRENT_USER, User | null>;
