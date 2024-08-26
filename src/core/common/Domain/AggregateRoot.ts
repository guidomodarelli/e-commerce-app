import { DomainEvent } from "./DomainEvent";

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[] = [];

  public pullDomainEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents;
    this.domainEvents = [];
    return domainEvents;
  }

  protected record(event: DomainEvent) {
    this.domainEvents.push(event);
  }
}
