import { UserAuthSignUpWithEmailAndPassword } from "@core/ports";

export const signUpAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignUpWithEmailAndPassword) => (email: string, password: string, displayName: string) => {
    return userAuth.signUp(email, password, displayName);
  };
