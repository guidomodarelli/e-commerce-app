import { UUID } from "@core/Contexts/Shared/Domain/ValueObject/UUID";

export abstract class DomainEvent {
  static EVENT_NAME: string;
  static fromPrimitives: (parameters: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: DomainEventAttributes;
  }) => DomainEvent;

  readonly aggregateId: string;
  readonly eventId: string;
  readonly occurredOn: Date;
  readonly eventName: string;

  constructor(parameters: { eventName: string; aggregateId: string; eventId?: string; occurredOn?: Date }) {
    const { aggregateId, eventName, eventId, occurredOn } = parameters;
    this.aggregateId = aggregateId;
    this.eventId = eventId ?? UUID.random().value;
    this.occurredOn = occurredOn ?? new Date();
    this.eventName = eventName;
  }

  abstract toPrimitives(): DomainEventAttributes;
}

export interface DomainEventClass {
  EVENT_NAME: string;
  fromPrimitives(parameters: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: DomainEventAttributes;
  }): DomainEvent;
}

type DomainEventAttributes = unknown;