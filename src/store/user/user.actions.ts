import { User } from "@core/domain/entities";
import { SET_CURRENT_USER } from "./user.types";
import { AppDispatch } from "@store/store";

export const UserAction = (dispatch: AppDispatch) => {
  return {
    setCurrentUser: (user: User | null) => {
      dispatch({ type: SET_CURRENT_USER, payload: user });
    },
  };
};

export type UserAction = Action<typeof SET_CURRENT_USER, User | null>;
