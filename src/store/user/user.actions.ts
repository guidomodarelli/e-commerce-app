import { User } from "@core/Contexts/Shop/User/Domain/User";
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./user.types";
import { createAction } from "@store/utils/reducer.utils";

export const checkUserSession = () => createAction(CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: User) => createAction(SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error) => createAction(SIGN_IN_FAILED, error);

export const signUpStart = (email: string, password: string, displayName: string) =>
  createAction(SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user: User) => createAction(SIGN_UP_SUCCESS, user);

export const signUpFailed = (error: Error) => createAction(SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(SIGN_OUT_START);

export const signOutSuccess = () => createAction(SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error) => createAction(SIGN_OUT_FAILED, error);

export type UserAction =
  | Action<typeof CHECK_USER_SESSION>
  | Action<typeof SIGN_UP_START, { email: string; password: string; displayName: string }>
  | Action<typeof SIGN_UP_SUCCESS, User>
  | Action<typeof GOOGLE_SIGN_IN_START>
  | Action<typeof EMAIL_SIGN_IN_START, { email: string; password: string }>
  | Action<typeof SIGN_IN_SUCCESS, User>
  | Action<typeof SIGN_IN_FAILED, Error>
  | Action<typeof SIGN_UP_FAILED, Error>
  | Action<typeof SIGN_OUT_START>
  | Action<typeof SIGN_OUT_SUCCESS>
  | Action<typeof SIGN_OUT_FAILED, Error>;
