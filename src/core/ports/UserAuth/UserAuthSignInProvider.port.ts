import { User } from "@core/domain/entities";

export interface UserAuthSignInProvider {
  signIn(): Promise<User>;
}
