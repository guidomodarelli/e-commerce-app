import { User } from "@core/Shared/Domain";

export interface UserAuthSignInProvider {
  signIn(): Promise<User>;
}
