import { User } from "@core/common/Domain";

export interface UserAuthSignInProvider {
  signIn(): Promise<User>;
}
