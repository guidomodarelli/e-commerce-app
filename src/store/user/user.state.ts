import { User } from "@core/domain/entities";

export const INITIAL_STATE = {
  currentUser: undefined as User | null | undefined,
};

export type UserState = typeof INITIAL_STATE;
