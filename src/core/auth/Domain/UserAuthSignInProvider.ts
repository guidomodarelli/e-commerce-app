import { User } from "@core/Contexts/Ecommerce/User/User";

export interface UserAuthSignInProvider {
  signIn(): Promise<User>;
}
