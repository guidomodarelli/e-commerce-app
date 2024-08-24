import { UserAuthSignInProvider } from "@core/auth/Domain";
import { User } from "@core/Shared/Domain";
import { UserFactory } from "@core/user/Domain";
import { Auth, AuthProvider, signInWithPopup } from "firebase/auth";

export class UserAuthSignInProviderFirebaseAdapter implements UserAuthSignInProvider {
  constructor(
    private readonly auth: Auth,
    private readonly provider: AuthProvider,
  ) {}

  async signIn(): Promise<User> {
    const { user } = await signInWithPopup(this.auth, this.provider);
    return UserFactory.create(user);
  }
}
