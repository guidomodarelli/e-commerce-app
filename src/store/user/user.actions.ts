import { User } from "@core/Contexts/Shop/User/Domain/User";
import { UserActionType } from "./user.types";
import { createAction } from "@store/utils/reducer.utils";

export const checkUserSession = () => createAction(UserActionType.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(UserActionType.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(UserActionType.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: User) => createAction(UserActionType.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error) => createAction(UserActionType.SIGN_IN_FAILED, error);

export const signUpStart = (email: string, password: string, displayName: string) =>
  createAction(UserActionType.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: User) => createAction(UserActionType.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error: Error) => createAction(UserActionType.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(UserActionType.SIGN_OUT_START);

export const signOutSuccess = () => createAction(UserActionType.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error) => createAction(UserActionType.SIGN_OUT_FAILED, error);

export type UserAction =
  | Action<typeof UserActionType.CHECK_USER_SESSION>
  | Action<typeof UserActionType.SIGN_UP_START, { email: string; password: string; displayName: string }>
  | Action<typeof UserActionType.SIGN_UP_SUCCESS, User>
  | Action<typeof UserActionType.GOOGLE_SIGN_IN_START>
  | Action<typeof UserActionType.EMAIL_SIGN_IN_START, { email: string; password: string }>
  | Action<typeof UserActionType.SIGN_IN_SUCCESS, User>
  | Action<typeof UserActionType.SIGN_IN_FAILED, Error>
  | Action<typeof UserActionType.SIGN_UP_FAILED, Error>
  | Action<typeof UserActionType.SIGN_OUT_START>
  | Action<typeof UserActionType.SIGN_OUT_SUCCESS>
  | Action<typeof UserActionType.SIGN_OUT_FAILED, Error>;
