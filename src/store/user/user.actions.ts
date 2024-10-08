import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";
import { createAction } from "@store/utils/reducer.utils";
import { UserActionType } from "./user.types";

export const checkUserSession = () => createAction(UserActionType.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(UserActionType.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(UserActionType.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: UserPrimitives) => createAction(UserActionType.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error) => createAction(UserActionType.SIGN_IN_FAILED, error);

export const signUpStart = (email: string, password: string, displayName: string) =>
  createAction(UserActionType.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: UserPrimitives) => createAction(UserActionType.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error: Error) => createAction(UserActionType.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(UserActionType.SIGN_OUT_START);

export const signOutSuccess = () => createAction(UserActionType.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error) => createAction(UserActionType.SIGN_OUT_FAILED, error);

export type SignInWithEmail = Action<typeof UserActionType.EMAIL_SIGN_IN_START, { email: string; password: string }>;
export type SignUpWithEmail = Action<
  typeof UserActionType.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = Action<typeof UserActionType.SIGN_UP_SUCCESS, UserPrimitives>;

export type UserAction =
  | Action<typeof UserActionType.CHECK_USER_SESSION>
  | SignUpWithEmail
  | Action<typeof UserActionType.SIGN_UP_SUCCESS, UserPrimitives>
  | Action<typeof UserActionType.GOOGLE_SIGN_IN_START>
  | SignInWithEmail
  | Action<typeof UserActionType.SIGN_IN_SUCCESS, UserPrimitives>
  | Action<typeof UserActionType.SIGN_IN_FAILED, Error>
  | Action<typeof UserActionType.SIGN_UP_FAILED, Error>
  | Action<typeof UserActionType.SIGN_OUT_START>
  | Action<typeof UserActionType.SIGN_OUT_SUCCESS>
  | Action<typeof UserActionType.SIGN_OUT_FAILED, Error>;
