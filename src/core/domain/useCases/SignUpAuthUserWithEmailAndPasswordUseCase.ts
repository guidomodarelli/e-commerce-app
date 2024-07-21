import { UserAuthWithEmailAndPassword } from "@core/ports/UserAuthWithEmailAndPassword.port";

export const signUpAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signUp(email, password);
  };
