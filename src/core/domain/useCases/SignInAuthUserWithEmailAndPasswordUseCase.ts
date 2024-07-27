import { UserAuthSignInWithEmailAndPassword } from "@core/ports";

export const signInAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignInWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signIn(email, password);
  };
