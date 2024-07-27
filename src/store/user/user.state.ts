import { User } from "@core/domain/entities";

export const INITIAL_STATE = {
  currentUser: null as User | null,
};

export type UserState = typeof INITIAL_STATE;
