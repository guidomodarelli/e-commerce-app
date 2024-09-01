import { UserAuthSignInWithEmailAndPassword } from "@core/auth/Domain";
import { AuthService } from "@core/Contexts/Ecommerce/Auth/AuthService";

export const signInWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignInWithEmailAndPassword, authService: AuthService) =>
  async (email: string, password: string) => {
    const user = await userAuth.signIn(email, password);
    await authService.loggedIn(user);
    return user;
  };
