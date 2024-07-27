import { User } from "@core/domain/entities";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export type UserAction = Action<typeof SET_CURRENT_USER, User>;
