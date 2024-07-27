import { UserAuthSignOut } from "@core/ports";
import { Auth, signOut } from "firebase/auth";

export class UserAuthSignOutFirebaseAdapter implements UserAuthSignOut {
  constructor(private auth: Auth) {}

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
