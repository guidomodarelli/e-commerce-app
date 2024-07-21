import { UserAuthWithEmailAndPassword } from "@core/ports/UserAuthWithEmailAndPassword.port";

export const signInAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signIn(email, password);
  };
