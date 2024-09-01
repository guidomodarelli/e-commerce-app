import { UserDisplayName, UserEmail, User, UserId } from "@core/common/Domain";
import { EventBus } from "@core/common/Domain/EventBus";

export const UserCreatorUseCase = (eventBus: EventBus) => (rawId: string, rawEmail: string, rawDisplayName: string) => {
  const id = new UserId(rawId);
  const email = new UserEmail(rawEmail);
  const displayName = new UserDisplayName(rawDisplayName);

  const user = User.publish(id, email, displayName);

  eventBus.publish(...user.pullDomainEvents());
};
