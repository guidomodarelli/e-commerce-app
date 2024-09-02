import { UserAuthSignInProvider } from "@core/Contexts/Shop/Auth/Domain";
import { User } from "@core/Contexts/Shop/User/Domain/User";
import { UserFirebaseFactory } from "@core/Contexts/Shop/User/Infrastructure";
import { Auth, AuthProvider, signInWithPopup } from "firebase/auth";

export class UserAuthSignInProviderFirebaseAdapter implements UserAuthSignInProvider {
  constructor(
    private readonly auth: Auth,
    private readonly provider: AuthProvider,
  ) {}

  async signIn(): Promise<User> {
    const { user } = await signInWithPopup(this.auth, this.provider);
    return UserFirebaseFactory.create(user);
  }
}
