import { DomainEvent } from "@core/Contexts/Shared/Domain/DomainEvent/DomainEvent";

interface UserCreatedDomainEventAttributes {
  readonly email: string;
  readonly displayName: string;
}

export class UserCreatedEvent extends DomainEvent implements UserCreatedDomainEventAttributes {
  public static readonly EVENT_NAME: string = "user.created";

  readonly email: string;
  readonly displayName: string;

  constructor({
    aggregateId,
    email,
    displayName,
    eventId,
    occurredOn,
  }: {
    aggregateId: string;
    eventId?: string;
    displayName: string;
    email: string;
    occurredOn?: Date;
  }) {
    super({ eventName: UserCreatedEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.displayName = displayName;
    this.email = email;
  }

  toPrimitives(): UserCreatedDomainEventAttributes {
    return {
      email: this.email,
      displayName: this.displayName,
    };
  }
}
