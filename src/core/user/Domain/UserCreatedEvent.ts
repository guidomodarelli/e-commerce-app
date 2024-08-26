import { DomainEvent } from "@core/common/Domain/DomainEvent";

export class UserCreatedEvent implements DomainEvent {
  public static readonly FULL_QUALIFIED_EVENT_NAME: string = "user.created";

  constructor(
    private readonly _id: string,
    private readonly _email: string,
    private readonly _displayName: string,
  ) {}

  fullQualifiedEventName(): string {
    return UserCreatedEvent.FULL_QUALIFIED_EVENT_NAME;
  }

  public get id(): string {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public get displayName(): string {
    return this._displayName;
  }
}
