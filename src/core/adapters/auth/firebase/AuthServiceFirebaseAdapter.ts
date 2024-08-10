import { AuthService } from "@core/ports/UserAuth/AuthService";
import { debounceTime, Subject } from "rxjs";
import { User } from "../../../domain/entities";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { UserFactoryFirebaseAdapter } from "../UserFactoryFirebaseAdapter";
import { UserRepository } from "@core/ports";

export class AuthServiceFirebaseAdapter implements AuthService {
  private readonly authState$ = new Subject<User | null>();

  constructor(
    auth: Auth,
    private userRepository: UserRepository,
  ) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await this.loggedIn(UserFactoryFirebaseAdapter.create(user));
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
