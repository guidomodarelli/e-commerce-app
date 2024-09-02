import { User } from "@core/Contexts/Shop/User/Domain/User";

export interface UserAuthSignUpWithEmailAndPassword {
  signUp(email: string, password: string, displayName: string): Promise<User>;
}