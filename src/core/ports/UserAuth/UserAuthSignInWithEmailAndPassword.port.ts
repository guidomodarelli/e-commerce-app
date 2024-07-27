import { User } from "@core/domain/entities";

export interface UserAuthSignInWithEmailAndPassword {
  signIn(email: string, password: string): Promise<User>;
}
