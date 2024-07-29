import { AuthService, UserAuthSignInWithEmailAndPassword } from "@core/ports";

export const signInAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignInWithEmailAndPassword, authService: AuthService) =>
  async (email: string, password: string) => {
    const user = await userAuth.signIn(email, password);
    await authService.loggedIn(user);
    return user;
  };
