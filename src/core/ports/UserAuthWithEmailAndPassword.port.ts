type UserCredential = unknown;

export interface UserAuthWithEmailAndPassword<T = UserCredential> {
  signUp(email: string, password: string): T | Promise<T>;
  signIn(email: string, password: string): T | Promise<T>;
  signOut(): void | Promise<void>;
}
