import { UserAuthSignInProvider } from "@core/Contexts/Shop/Auth/Domain";
import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";
import { UserFromFirebaseFactory } from "@core/Contexts/Shop/User/Infrastructure";
import { Auth, AuthProvider, signInWithPopup } from "firebase/auth";

export class UserAuthSignInProviderFirebaseAdapter implements UserAuthSignInProvider {
  constructor(
    private readonly auth: Auth,
    private readonly provider: AuthProvider,
  ) {}

  async signIn(): Promise<UserPrimitives> {
    const { user } = await signInWithPopup(this.auth, this.provider);
    return UserFromFirebaseFactory.create(user);
  }
}
