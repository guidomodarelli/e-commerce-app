import { UserCreatedEvent } from "@core/user/Domain/UserCreatedEvent";
import { UserDisplayName } from "./UserDisplayName";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { AggregateRoot } from "../AggregateRoot";

export interface User {
  id: string;
  email: string;
  displayName: string;
}

export class UserEntity extends AggregateRoot {
  private constructor(
    private readonly _id: UserId,
    private readonly _email: UserEmail,
    private readonly _displayName: UserDisplayName,
  ) {
    super();
  }

  public static create({ id, email, displayName }: User) {
    return new UserEntity(new UserId(id), new UserEmail(email), new UserDisplayName(displayName));
  }

  public get idValue(): string {
    return this._id.value;
  }

  public get emailValue(): string {
    return this._email.value;
  }

  public get displayNameValue(): string {
    return this._displayName.value;
  }

  public toPrimitives(): User {
    return {
      id: this.idValue,
      email: this.emailValue,
      displayName: this.displayNameValue,
    };
  }

  public static publish(id: UserId, email: UserEmail, displayName: UserDisplayName): UserEntity {
    const user = new UserEntity(id, email, displayName);
    const userCreatedEvent = new UserCreatedEvent(id.value, email.value, displayName.value);

    user.record(userCreatedEvent);

    return user;
  }
}
