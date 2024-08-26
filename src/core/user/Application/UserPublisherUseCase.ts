import { UserDisplayName, UserEmail, UserEntity, UserId } from "@core/common/Domain";
import { EventBus } from "@core/common/Domain/EventBus";

export const UserPublisherUseCase =
  (eventBus: EventBus) => (rawId: string, rawEmail: string, rawDisplayName: string) => {
    const id = new UserId(rawId);
    const email = new UserEmail(rawEmail);
    const displayName = new UserDisplayName(rawDisplayName);

    const user = UserEntity.publish(id, email, displayName);

    eventBus.publish(user.pullDomainEvents());
  };
