import { User } from "@core/domain/entities";
import { UserAuthSignInProvider } from "@core/ports";
import { Auth, AuthProvider, signInWithPopup } from "firebase/auth";
import { UserFactoryFirebaseAdapter } from "../UserFactoryFirebaseAdapter";

export class UserAuthSignInProviderFirebaseAdapter implements UserAuthSignInProvider {
  constructor(
    private readonly auth: Auth,
    private readonly provider: AuthProvider,
  ) {}

  async signIn(): Promise<User> {
    const { user } = await signInWithPopup(this.auth, this.provider);
    return UserFactoryFirebaseAdapter.create(user);
  }
}
