import { User } from "@core/domain/entities";

export interface UserAuthSignUpWithEmailAndPassword {
  signUp(email: string, password: string, displayName: string): Promise<User>;
}
