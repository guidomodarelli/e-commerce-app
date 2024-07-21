import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User } from "../domain/entities/User";
import { UserAuthWithEmailAndPassword } from "../ports/UserAuthWithEmailAndPassword.port";

export class UserAuthWithEmailAndPasswordFirebaseAdapter implements UserAuthWithEmailAndPassword {
  constructor(private auth: Auth) {}

  async signUp(email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    return userCredential.user;
  }

  async signIn(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return userCredential.user;
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
