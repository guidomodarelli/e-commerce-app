import { User } from "@core/domain/entities";

export interface AuthService {
  loggedIn(user: User): Promise<void>;
  loggedOut(): void;
  onAuthStateChange(callback: (user: User | null) => void): () => void;
}
