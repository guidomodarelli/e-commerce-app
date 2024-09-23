import { UserPrimitives } from "../../User/Domain/User";

export interface AuthService {
  loggedIn(user: UserPrimitives): Promise<void>;
  loggedOut(): void;
  onAuthStateChange(callback: (user: UserPrimitives | null) => void): () => void;
}
