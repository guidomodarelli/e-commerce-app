import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "@core/domain/entities";
import { UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword, UserRepository } from "@core/ports";
import { UserFactoryFirebaseAdapter } from "../UserFactoryFirebaseAdapter";

export class UserAuthWithEmailAndPasswordFirebaseAdapter
  implements UserAuthSignInWithEmailAndPassword, UserAuthSignUpWithEmailAndPassword
{
  constructor(
    private auth: Auth,
    private userRepository: UserRepository,
  ) {}

  async signUp(email: string, password: string, displayName: string): Promise<User> {
    const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
    return UserFactoryFirebaseAdapter.create({ ...user, displayName });
  }

  async signIn(email: string, password: string): Promise<User> {
    const { user: userFirebase } = await signInWithEmailAndPassword(this.auth, email, password);
    const user = await this.userRepository.findByEmail(email);
    let displayName = "";
    if (user) {
      displayName = user.displayName;
    }
    return UserFactoryFirebaseAdapter.create({ ...userFirebase, displayName });
  }
}
