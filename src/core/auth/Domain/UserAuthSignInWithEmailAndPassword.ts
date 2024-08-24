import { User } from "@core/common/Domain";

export interface UserAuthSignInWithEmailAndPassword {
  signIn(email: string, password: string): Promise<User>;
}
