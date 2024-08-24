import { User } from "@core/Shared/Domain";

export interface UserAuthSignInWithEmailAndPassword {
  signIn(email: string, password: string): Promise<User>;
}
