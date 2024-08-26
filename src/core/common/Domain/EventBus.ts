import { DomainEvent } from "./DomainEvent";

export type Listener = (event: DomainEvent) => void;

export interface EventBus {
  subscribe(event: DomainEvent, listener: Listener): () => void;
  publish(events: DomainEvent[]): void;
}
