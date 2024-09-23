import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";

export const INITIAL_STATE = {
  currentUser: undefined as UserPrimitives | null | undefined,
  error: null as Error | null,
};

export type UserState = typeof INITIAL_STATE;
