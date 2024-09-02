import { DomainEventSubscribers } from "@core/Contexts/Shared/Infrastructure";
import { DomainEvent } from "./DomainEvent";

export interface EventBus {
  publish(events: DomainEvent[]): Promise<void>;
  addSubscribers(subscribers: DomainEventSubscribers): void;
}