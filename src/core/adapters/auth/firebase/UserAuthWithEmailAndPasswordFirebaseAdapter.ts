import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "@core/domain/entities";
import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword } from "@core/ports";

export class UserAuthWithEmailAndPasswordFirebaseAdapter
  implements UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword
{
  constructor(private auth: Auth) {}

  async signUp(email: string, password: string, displayName: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    return new User({
      id: userCredential.user.uid,
      displayName,
      email: userCredential.user.email,
    });
  }

  async signIn(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return new User({
      id: userCredential.user.uid,
      ...userCredential.user,
    });
  }
}
