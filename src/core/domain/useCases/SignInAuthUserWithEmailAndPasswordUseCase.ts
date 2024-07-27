import { UserAuthWithEmailAndPassword } from "@core/ports";

export const signInAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signIn(email, password);
  };
