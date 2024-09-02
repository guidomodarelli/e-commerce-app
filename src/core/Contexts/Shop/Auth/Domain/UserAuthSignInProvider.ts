import { User } from "@core/Contexts/Shop/User/Domain/User";

export interface UserAuthSignInProvider {
  signIn(): Promise<User>;
}
