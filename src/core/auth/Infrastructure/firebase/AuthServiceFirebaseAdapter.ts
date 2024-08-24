import { AuthService, User } from "@core/Shared/Domain";
import { UserFactory, UserRepository } from "@core/user/Domain";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { debounceTime, Subject } from "rxjs";

export class AuthServiceFirebaseAdapter implements AuthService {
  private readonly authState$ = new Subject<User | null>();

  constructor(
    auth: Auth,
    private userRepository: UserRepository,
  ) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await this.loggedIn(UserFactory.create(user));
      } else {
        this.loggedOut();
      }
    });
  }

  async loggedIn(user: User): Promise<void> {
    const userFromRepository = await this.userRepository.findByEmail(user.email);
    if (userFromRepository) {
      this.authState$.next(userFromRepository);
    }
  }

  loggedOut(): void {
    this.authState$.next(null);
  }

  onAuthStateChange(callback: (user: User | null) => void): () => void {
    const subscription = this.authState$.pipe(debounceTime(50)).subscribe(callback);

    return () => {
      subscription.unsubscribe();
    };
  }
}
