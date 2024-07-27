import { User } from "@core/domain/entities";

export interface UserAuthWithEmailAndPassword {
  signUp(email: string, password: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
}
