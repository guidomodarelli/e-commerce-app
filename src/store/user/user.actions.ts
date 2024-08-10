import { User } from "@core/domain/entities";
import { SET_CURRENT_USER } from "./user.types";
import { createAction } from "@store/utils/reducer.utils";

export const setCurrentUser = (user: User | null) => createAction(SET_CURRENT_USER, user);

export type UserAction = Action<typeof SET_CURRENT_USER, User | null>;
