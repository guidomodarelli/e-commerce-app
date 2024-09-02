import { DomainEvent } from "./DomainEvent";
import { DomainEventClass } from "./DomainEventClass";

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): DomainEventClass[];
  on(domainEvent: T): Promise<void>;
}
