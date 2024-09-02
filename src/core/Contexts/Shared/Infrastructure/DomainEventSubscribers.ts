import { ContainerBuilder, Definition } from "node-dependency-injection";
import { DomainEvent, DomainEventSubscriber } from "../Domain";

export class DomainEventSubscribers {
  constructor(public items: DomainEventSubscriber<DomainEvent>[]) {}

  static from(container: ContainerBuilder): DomainEventSubscribers {
    const subscriberDefinitions = container.findTaggedServiceIds("domainEventSubscriber") as Map<string, Definition>;
    const subscribers: DomainEventSubscriber<DomainEvent>[] = [];

    for (const [key] of subscriberDefinitions) {
      const domainEventSubscriber = container.get<DomainEventSubscriber<DomainEvent>>(key.toString());
      subscribers.push(domainEventSubscriber);
    }

    return new DomainEventSubscribers(subscribers);
  }
}