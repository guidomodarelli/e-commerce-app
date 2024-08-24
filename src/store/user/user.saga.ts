import {
  getCurrentUser,
  saveUserInRepository,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signOut,
  signUpWithEmailAndPassword,
} from "@/setup";
import { User } from "@core/Shared/Domain";
import { Payload } from "@store/utils/payload.utils";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from ".";

export function* signInEffect(user: User) {
  yield call(saveUserInRepository, user);
  yield put(signInSuccess(user));
}

export function* signInWithGoogleEffect() {
  try {
    const user = (yield call(signInWithGoogle)) as User;
    yield call(signInEffect, user);
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signInWithEmailEffect({ payload: { email, password } }: Payload<{ email: string; password: string }>) {
  try {
    const user = (yield call(signInWithEmailAndPassword, email, password)) as User;
    yield call(signInEffect, user);
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signUpWithEmailEffect({
  payload: { email, password, displayName },
}: Payload<{ email: string; password: string; displayName: string }>) {
  try {
    const user = (yield call(signUpWithEmailAndPassword, email, password, displayName)) as User;
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailed(error as Error));
  }
}

export function* signOutEffect() {
  try {
    yield call(signOut);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error as Error));
  }
}

export function* isUserAuthenticatedEffect() {
  try {
    const user = (yield call(getCurrentUser)) as User;
    if (!user) {
      yield put(signOutSuccess());
    }
    yield call(signInEffect, user);
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}

export function* signInAfterSignUpEffect({ payload: user }: Payload<User>) {
  yield call(signInEffect, user);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticatedEffect);
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogleEffect);
}

export function* onEmailSignInStart() {
  // FIX
  // @ts-expect-error No overload matches this call
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmailEffect);
}

export function* onSignUpStart() {
  // FIX
  // @ts-expect-error No overload matches this call
  yield takeLatest(SIGN_UP_START, signUpWithEmailEffect);
}

export function* onSignUpSuccess() {
  // FIX
  // @ts-expect-error No overload matches this call
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUpEffect);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOutEffect);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
