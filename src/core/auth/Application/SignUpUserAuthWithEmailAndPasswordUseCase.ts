import { UserAuthSignUpWithEmailAndPassword } from "@core/auth/Domain";
import { AuthService } from "@core/common/Domain";

export const signUpAuthUserWithEmailAndPasswordUseCase =
  (userAuth: UserAuthSignUpWithEmailAndPassword, authService: AuthService) =>
  async (email: string, password: string, displayName: string) => {
    const user = await userAuth.signUp(email, password, displayName);
    await authService.loggedIn(user);
    return user;
  };
