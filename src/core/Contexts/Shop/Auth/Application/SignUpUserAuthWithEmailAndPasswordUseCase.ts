import { UserAuthSignUpWithEmailAndPassword } from "@core/Contexts/Shop/Auth/Domain";
import { AuthService } from "@core/Contexts/Shop/Auth/Domain/AuthService";

export const signUpAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignUpWithEmailAndPassword, authService: AuthService) =>
  async (email: string, password: string, displayName: string) => {
    const user = await userAuth.signUp(email, password, displayName);
    await authService.loggedIn(user);
    return user;
  };
