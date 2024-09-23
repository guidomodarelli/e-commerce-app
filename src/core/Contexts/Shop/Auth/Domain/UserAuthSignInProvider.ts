import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";

export interface UserAuthSignInProvider {
  signIn(): Promise<UserPrimitives>;
}
