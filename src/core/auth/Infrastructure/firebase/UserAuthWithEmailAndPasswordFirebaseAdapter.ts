import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword } from "@core/auth/Domain";
import { User } from "@core/Shared/Domain";
import { UserFactory } from "@core/user/Domain";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export class UserAuthWithEmailAndPasswordFirebaseAdapter
  implements UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword
{
  constructor(private auth: Auth) {}

  async signUp(email: string, password: string, displayName: string): Promise<User> {
    const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
    return UserFactory.create({ ...user, displayName });
  }

  async signIn(email: string, password: string): Promise<User> {
    const { user } = await signInWithEmailAndPassword(this.auth, email, password);
    return UserFactory.create({ ...user });
  }
}
