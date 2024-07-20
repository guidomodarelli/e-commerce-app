import { UserAuthWithEmailAndPassword } from "@/core/ports/UserAuthWithEmailAndPassword.port";

export const createAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signUp(email, password);
  };
