import { User } from "@core/common/Domain";

export const INITIAL_STATE = {
  currentUser: undefined as User | null | undefined,
  error: null as Error | null,
};

export type UserState = typeof INITIAL_STATE;
