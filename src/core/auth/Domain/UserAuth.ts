import { User } from "@core/common/Domain";

export type UserAuth = Pick<Omit<User, "id">, "email" | "displayName"> & { password: string };
