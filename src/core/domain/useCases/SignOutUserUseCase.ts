import { UserAuthSignOut } from "@core/ports";
import { toast } from "sonner";

export const signOutUserUseCase = (userAuth: UserAuthSignOut) => () => {
  toast.success("You are logged out successfully!");
  return userAuth.signOut();
};
