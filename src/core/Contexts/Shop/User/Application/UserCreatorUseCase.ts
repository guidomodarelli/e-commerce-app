import { EventBus } from "@core/Contexts/Shared/Domain";
import { UserId } from "../Domain/UserId";
import { UserEmail } from "../Domain/UserEmail";
import { UserDisplayName } from "../Domain/UserDisplayName";
import { User } from "../Domain/User";

export const UserCreatorUseCase =
  (eventBus: EventBus) => async (rawId: string, rawEmail: string, rawDisplayName: string) => {
    const id = new UserId(rawId);
    const email = new UserEmail(rawEmail);
    const displayName = new UserDisplayName(rawDisplayName);

    const user = User.publish(id, email, displayName);

    await eventBus.publish(user.pullDomainEvents());
  };
