import { UserInfo } from "firebase/auth";
import { UserPrimitives } from "../Domain/User";

export const UserFromFirebaseFactory = {
  create(user: UserInfo): UserPrimitives {
    const id = user.uid;
    const email = user.email ?? "";
    const displayName = user.displayName ?? "";
    return { id, email, displayName };
  },
};
