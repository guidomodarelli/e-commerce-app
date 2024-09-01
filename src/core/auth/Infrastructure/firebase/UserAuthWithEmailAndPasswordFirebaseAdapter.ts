import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword } from "@core/auth/Domain";
import { User } from "@core/Contexts/Ecommerce/User/User";
import { UserFirebaseFactory } from "@core/user/Infrastructure";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export class UserAuthWithEmailAndPasswordFirebaseAdapter
  implements UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword
{
  constructor(private auth: Auth) {}

  async signUp(email: string, password: string, displayName: string): Promise<User> {
    const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
    return UserFirebaseFactory.create({ ...user, displayName });
  }

  async signIn(email: string, password: string): Promise<User> {
    const { user } = await signInWithEmailAndPassword(this.auth, email, password);
    return UserFirebaseFactory.create({ ...user });
  }
}
