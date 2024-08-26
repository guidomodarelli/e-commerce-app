import { DomainEvent } from "@core/common/Domain";
import { EventBus, EventHandler } from "@core/common/Domain/EventBus";

export class ObserverEventBus implements EventBus {
  private readonly subscribers = new Map<string, EventHandler[]>();

  subscribe(eventName: string, newHandler: EventHandler): () => void {
    const handlers = this.subscribers.get(eventName) ?? [];
    handlers.push(newHandler);
    this.subscribers.set(eventName, handlers);

    return () => {
      this.unsubscribe(eventName, newHandler);
    };
  }

  unsubscribe(eventName: string, oldHandler: EventHandler): void {
    let handlers = this.subscribers.get(eventName) ?? [];
    handlers = handlers.filter((handler) => handler !== oldHandler);
    this.subscribers.set(eventName, handlers);
  }

  once(eventName: string, newHandler: EventHandler): void {
    const handleOnce = (event: DomainEvent) => {
      newHandler(event);
      this.unsubscribe(eventName, handleOnce);
    };

    this.subscribe(eventName, handleOnce);
  }

  publish(...events: DomainEvent[]): void {
    for (const event of events) {
      const handlers = this.subscribers.get(event.fullQualifiedEventName());
      if (handlers && handlers.length > 0) {
        for (const handler of handlers) {
          handler(event);
        }
      }
    }
  }
}
