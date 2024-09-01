import { User } from "../User/User";

export interface AuthService {
  loggedIn(user: User): Promise<void>;
  loggedOut(): void;
  onAuthStateChange(callback: (user: User | null) => void): () => void;
}
