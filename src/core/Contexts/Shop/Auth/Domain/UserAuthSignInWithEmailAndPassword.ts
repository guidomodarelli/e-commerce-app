import { User } from "@core/Contexts/Shop/User/Domain/User";

export interface UserAuthSignInWithEmailAndPassword {
  signIn(email: string, password: string): Promise<User>;
}
