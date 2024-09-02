import { DomainEvent } from "./DomainEvent";
import { DomainEventAttributes } from "./DomainEventAttributes";

export interface DomainEventClass {
  EVENT_NAME: string;
  fromPrimitives(parameters: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: DomainEventAttributes;
  }): DomainEvent;
}
