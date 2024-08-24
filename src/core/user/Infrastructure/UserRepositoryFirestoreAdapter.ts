import { User } from "@core/common/Domain";
import { UserRepository } from "@core/user/Domain";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";

export class UserRepositoryFirestoreAdapter implements UserRepository {
  constructor(private readonly database: Firestore) {}

  async save(user: User): Promise<void> {
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
        });
      } catch (error) {
        const _error = error as Error;
        console.error("error creating the user", _error.message);
      }
    }
  }

  findByEmail(email: string): Promise<User | undefined> {
    // TODO: Method not implemented.
    throw new Error("Method not implemented.");
  }
}
