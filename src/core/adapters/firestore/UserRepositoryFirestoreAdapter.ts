import { User } from "../../domain/entities/User";
import { UserRepository } from "../../ports/UserRepository.port";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";

export class UserRepositoryFirestoreAdapter implements UserRepository {
  constructor(private readonly database: Firestore) {}

  async save<Info>(user: User, additionalInformation?: Info | undefined): Promise<void> {
    const userDocumentReference = doc(this.database, "users", user.id);

    const userSnapshot = await getDoc(userDocumentReference);

    if (!userSnapshot.exists()) {
      const { displayName, email } = user;
      const createdAt = new Date();
      try {
        await setDoc(userDocumentReference, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        const _error = error as Error;
        console.error("error creating the user", _error.message);
      }
    }
  }
}
