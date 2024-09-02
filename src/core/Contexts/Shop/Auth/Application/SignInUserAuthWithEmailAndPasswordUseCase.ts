import { UserAuthSignInWithEmailAndPassword } from "@core/Contexts/Shop/Auth/Domain";
import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";

export const signInWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignInWithEmailAndPassword, authService: AuthService) =>
  async (email: string, password: string) => {
    const user = await userAuth.signIn(email, password);
    await authService.loggedIn(user);
    return user;
  };
