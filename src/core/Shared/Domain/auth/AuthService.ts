import { User } from "@core/Shared/Domain";

export interface AuthService {
  loggedIn(user: User): Promise<void>;
  loggedOut(): void;
  onAuthStateChange(callback: (user: User | null) => void): () => void;
}