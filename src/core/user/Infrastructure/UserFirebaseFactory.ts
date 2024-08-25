import { Factory, User, UserEntity } from "@core/common/Domain";
import { UserInfo } from "firebase/auth";

export const UserFirebaseFactory: Factory<UserInfo, User> = {
  create(user: UserInfo): User {
    const id = user.uid;
    const email = user.email ?? "";
    const displayName = user.displayName ?? "";
    return UserEntity.create({ id, email, displayName }).toPrimitives();
  },
};
