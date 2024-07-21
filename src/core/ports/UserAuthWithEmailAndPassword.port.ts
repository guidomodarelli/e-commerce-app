import { User } from "../domain/entities/User";

export interface UserAuthWithEmailAndPassword {
  signUp(email: string, password: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
}
