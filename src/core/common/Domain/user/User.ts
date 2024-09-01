import { UserCreatedEvent } from "@core/user/Domain/UserCreatedEvent";
import { UserDisplayName } from "./UserDisplayName";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { AggregateRoot } from "@core/Contexts/Shared/Domain/AggregateRoot";

interface UserPrimitives {
  id: string;
  email: string;
  displayName: string;
}

export class User extends AggregateRoot {
  private constructor(
    readonly id: UserId,
    readonly email: UserEmail,
    readonly displayName: UserDisplayName,
  ) {
    super();
  }

  public static create({ id, email, displayName }: UserPrimitives) {
    return new User(new UserId(id), new UserEmail(email), new UserDisplayName(displayName));
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id.value,
      email: this.email.value,
      displayName: this.displayName.value,
    };
  }

  public static publish(id: UserId, email: UserEmail, displayName: UserDisplayName): User {
    const user = new User(id, email, displayName);
    const userCreatedEvent = new UserCreatedEvent({
      aggregateId: id.value,
      email: email.value,
      displayName: displayName.value,
    });

    user.record(userCreatedEvent);

    return user;
  }
}
