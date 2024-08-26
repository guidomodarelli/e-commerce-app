import { DomainEvent } from "./DomainEvent";

export type EventHandler = (event: DomainEvent) => void;

export interface EventBus {
  subscribe(eventName: string, newHandler: EventHandler): () => void;
  unsubscribe(eventName: string, oldHandler: EventHandler): void;
  once(eventName: string, newHandler: EventHandler): void;
  publish(...events: DomainEvent[]): void;
}
