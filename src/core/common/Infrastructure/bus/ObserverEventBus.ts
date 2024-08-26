import { DomainEvent } from "@core/common/Domain";
import { EventBus, Listener } from "@core/common/Domain/EventBus";

export class ObserverEventBus implements EventBus {
  private readonly subscribers = new Map<string, Listener[]>();

  subscribe(event: DomainEvent, newListener: Listener): () => void {
    let listeners = this.subscribers.get(event.fullQualifiedEventName()) ?? [];
    listeners.push(newListener);
    this.subscribers.set(event.fullQualifiedEventName(), listeners);

    return () => {
      listeners = listeners.filter((listener) => listener !== newListener);
      this.subscribers.set(event.fullQualifiedEventName(), listeners);
    };
  }

  publish(...events: DomainEvent[]): void {
    for (const event of events) {
      const listeners = this.subscribers.get(event.fullQualifiedEventName());
      if (listeners && listeners.length > 0) {
        for (const listener of listeners) {
          listener(event);
        }
      }
    }
  }
}
