import { UserAuthWithEmailAndPassword } from "@/core/ports/UserAuthWithEmailAndPassword.port";

export const createAuthUserWithEmailAndPassword =
  (userAuth: UserAuthWithEmailAndPassword) => (email: string, password: string) => {
    return userAuth.signUp(email, password);
  };
