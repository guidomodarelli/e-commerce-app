import { User } from "@core/Contexts/Shop/User/Domain/User";
import { UserFirebaseFactory } from "@core/Contexts/Shop/User/Infrastructure";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword } from "../../Domain";

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