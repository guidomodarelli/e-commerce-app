import { User } from "@core/common/Domain";

export interface UserAuthSignUpWithEmailAndPassword {
  signUp(email: string, password: string, displayName: string): Promise<User>;
}
