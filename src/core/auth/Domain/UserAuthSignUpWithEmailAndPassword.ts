import { User } from "@core/Shared/Domain";

export interface UserAuthSignUpWithEmailAndPassword {
  signUp(email: string, password: string, displayName: string): Promise<User>;
}
