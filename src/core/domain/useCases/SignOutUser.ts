import { UserAuthWithEmailAndPassword } from "@/core/ports/UserAuthWithEmailAndPassword.port";
import { toast } from "sonner";

export const signOutUser = (userAuth: UserAuthWithEmailAndPassword) => () => {
  toast.success("You are logged out successfully!");
  return userAuth.signOut();
};
