import { UserAuthSignInProvider } from "@core/auth/Domain";
import { User } from "@core/common/Domain";
import { UserFirebaseFactory } from "@core/user/Infrastructure";
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
