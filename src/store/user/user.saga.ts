import {
  getCurrentUser,
  saveUser,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signOut,
  signUpWithEmailAndPassword,
} from "@/setup";
import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";
import { all, call, put, takeLatest } from "typed-redux-saga";
import {
  signInFailed,
  signInSuccess,
  SignInWithEmail,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  SignUpSuccess,
  signUpSuccess,
  SignUpWithEmail,
} from "./user.actions.ts";
import { UserActionType } from "./user.types.ts";

export function* signInEffect(user: UserPrimitives) {
  yield* call(saveUser, user);
  yield* put(signInSuccess(user));
}

export function* signInWithGoogleEffect() {
  try {
    const user = yield* call(signInWithGoogle);
    yield* call(signInEffect, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmailEffect({ payload: { email, password } }: SignInWithEmail) {
  try {
    const user = yield* call(signInWithEmailAndPassword, email, password);
    yield* call(signInEffect, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUpWithEmailEffect({ payload: { email, password, displayName } }: SignUpWithEmail) {
  try {
    const user = yield* call(signUpWithEmailAndPassword, email, password, displayName);
    yield* put(signUpSuccess(user));
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOutEffect() {
  try {
    yield* call(signOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* isUserAuthenticatedEffect() {
  try {
    const user = yield* call(getCurrentUser);
    yield* user ? call(signInEffect, user) : put(signOutSuccess());
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInAfterSignUpEffect({ payload: user }: SignUpSuccess) {
  yield* call(signInEffect, user);
}

export function* onCheckUserSession() {
  yield* takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticatedEffect);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogleEffect);
}

export function* onEmailSignInStart() {
  yield* takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmailEffect);
}

export function* onSignUpStart() {
  yield* takeLatest(UserActionType.SIGN_UP_START, signUpWithEmailEffect);
}

export function* onSignUpSuccess() {
  yield* takeLatest(UserActionType.SIGN_UP_SUCCESS, signInAfterSignUpEffect);
}

export function* onSignOutStart() {
  yield* takeLatest(UserActionType.SIGN_OUT_START, signOutEffect);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
