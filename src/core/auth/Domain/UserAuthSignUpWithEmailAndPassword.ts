import { User } from "@core/Contexts/Ecommerce/User/User";

export interface UserAuthSignUpWithEmailAndPassword {
  signUp(email: string, password: string, displayName: string): Promise<User>;
}
