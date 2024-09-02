import { User } from "../../User/Domain/User";

export interface AuthService {
  loggedIn(user: User): Promise<void>;
  loggedOut(): void;
  onAuthStateChange(callback: (user: User | null) => void): () => void;
}
