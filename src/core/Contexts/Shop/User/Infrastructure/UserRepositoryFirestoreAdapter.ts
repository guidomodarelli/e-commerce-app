import { UserPrimitives } from "@core/Contexts/Shop/User/Domain/User";
import { doc, Firestore, getDoc, setDoc } from "firebase/firestore";
import { UserRepository } from "../Domain";

export class UserRepositoryFirestoreAdapter implements UserRepository {
  constructor(private readonly database: Firestore) {}

  async save(user: UserPrimitives): Promise<void> {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByEmail(_email: string): Promise<UserPrimitives | undefined> {
    // TODO: Method not implemented.
    throw new Error("Method not implemented.");
  }
}
