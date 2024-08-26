import { DomainEvent } from "./DomainEvent";

export interface DomainEventHandler {
  handle(event: DomainEvent): Promise<void> | void;
}
