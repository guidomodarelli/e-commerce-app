import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "@core/domain/entities";
import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword } from "@core/ports";
import { UserFactoryFirebaseAdapter } from "../UserFactoryFirebaseAdapter";

export class UserAuthWithEmailAndPasswordFirebaseAdapter
  implements UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword
{
  constructor(private auth: Auth) {}

  async signUp(email: string, password: string, displayName: string): Promise<User> {
    const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
    return UserFactoryFirebaseAdapter.create({ ...user, displayName });
  }

  async signIn(email: string, password: string): Promise<User> {
    const { user } = await signInWithEmailAndPassword(this.auth, email, password);
    return UserFactoryFirebaseAdapter.create({ ...user });
  }
}
