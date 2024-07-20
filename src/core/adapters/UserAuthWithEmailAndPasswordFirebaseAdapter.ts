import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { UserAuthWithEmailAndPassword } from "../ports/UserAuthWithEmailAndPassword.port";

export class UserAuthWithEmailAndPasswordFirebaseAdapter implements UserAuthWithEmailAndPassword<UserCredential> {
  constructor(private auth: Auth) {}

  signUp(email: string, password: string): UserCredential | Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string): UserCredential | Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut(): void | Promise<void> {
    return signOut(this.auth);
  }
}
