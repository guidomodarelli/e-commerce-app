import { UserDisplayName } from "./UserDisplayName";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export interface UserPrimitives {
  id: string;
  email: string;
  displayName: string;
}

export class User {
  private constructor(
    private readonly _id: UserId,
    private readonly _email: UserEmail,
    private readonly _displayName: UserDisplayName,
  ) {}

  public static create({ id, email, displayName }: UserPrimitives) {
    return new User(new UserId(id), new UserEmail(email), new UserDisplayName(displayName));
  }

  public get id(): string {
    return this._id.value;
  }

  public get email(): string {
    return this._email.value;
  }

  public get displayName(): string {
    return this._displayName.value;
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id,
      email: this.email,
      displayName: this.displayName,
    };
  }
}
