import { AuthService } from "@core/ports/UserAuth/AuthService";
import { debounceTime, Subject } from "rxjs";
import { User } from "../../../domain/entities";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { UserFactoryFirebaseAdapter } from "../UserFactoryFirebaseAdapter";

export class AuthServiceFirebaseAdapter implements AuthService {
  private readonly authStateSubject = new Subject<User | null>();

  constructor(auth: Auth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn(UserFactoryFirebaseAdapter.create(user));
      } else {
        this.loggedOut();
      }
    });
  }

  loggedIn(user: User): void {
    this.authStateSubject.next(user);
  }

  loggedOut(): void {
    this.authStateSubject.next(null);
  }

  onAuthStateChange(callback: (user: User | null) => void): () => void {
    const subscription = this.authStateSubject.pipe(debounceTime(50)).subscribe(callback);

    return () => {
      subscription.unsubscribe();
    };
  }
}
