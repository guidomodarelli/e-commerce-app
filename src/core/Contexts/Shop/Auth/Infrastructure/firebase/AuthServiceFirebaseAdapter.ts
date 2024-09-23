import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";
import { UserRepository } from "@core/Contexts/Shop/User/Domain";
import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";
import { UserFromFirebaseFactory } from "@core/Contexts/Shop/User/Infrastructure";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { debounceTime, Subject } from "rxjs";

export class AuthServiceFirebaseAdapter implements AuthService {
  private readonly authState$ = new Subject<UserPrimitives | null>();

  constructor(
    auth: Auth,
    private userRepository: UserRepository,
  ) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await this.loggedIn(UserFromFirebaseFactory.create(user));
      } else {
        this.loggedOut();
      }
    });
  }

  async loggedIn(user: UserPrimitives): Promise<void> {
    const userFromRepository = await this.userRepository.findByEmail(user.email);
    if (userFromRepository) {
      this.authState$.next(userFromRepository);
    }
  }

  loggedOut(): void {
    this.authState$.next(null);
  }

  onAuthStateChange(callback: (user: UserPrimitives | null) => void): () => void {
    const subscription = this.authState$.pipe(debounceTime(50)).subscribe(callback);

    return () => {
      subscription.unsubscribe();
    };
  }
}
