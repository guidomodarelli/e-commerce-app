import { User } from "@core/Contexts/Ecommerce/User/User";

export interface UserAuthSignInWithEmailAndPassword {
  signIn(email: string, password: string): Promise<User>;
}
