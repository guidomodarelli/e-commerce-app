import { UserAuthWithEmailAndPassword } from "@core/ports";
import { toast } from "sonner";

export const signOutUserUseCase = (userAuth: UserAuthWithEmailAndPassword) => () => {
  toast.success("You are logged out successfully!");
  return userAuth.signOut();
};
