import { DomainEvent } from "@core/common/Domain";
import { EventBus, Listener } from "@core/common/Domain/EventBus";

export class ObserverEventBus implements EventBus {
  private readonly subscribers = new Map<DomainEvent, Listener[]>();

  subscribe(event: DomainEvent, newListener: Listener): () => void {
    let listeners = this.subscribers.get(event) ?? [];
    listeners.push(newListener);
    this.subscribers.set(event, listeners);

    return () => {
      listeners = listeners.filter((listener) => listener === newListener);
      this.subscribers.set(event, listeners);
    };
  }

  publish(events: DomainEvent[]): void {
    for (const event of events) {
      const listeners = this.subscribers.get(event);
      if (listeners && listeners.length > 0) {
        for (const listener of listeners) {
          listener(event);
        }
      }
    }
  }
}
