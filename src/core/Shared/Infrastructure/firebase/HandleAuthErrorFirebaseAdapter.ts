import {
  FIREBASE_EMAIL_EXISTS,
  FIREBASE_INVALID_EMAIL,
  FIREBASE_INVALID_LOGIN_CREDENTIALS,
  FIREBASE_INVALID_PASSWORD,
  FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER,
  FIREBASE_WEAK_PASSWORD,
} from "@/constants/auth-error-codes.constants";
import {
  MESSAGE_EMAIL_EXISTS,
  MESSAGE_INVALID_LOGIN_CREDENTIALS,
  MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER,
  MESSAGE_WEAK_PASSWORD,
} from "@/constants/auth-error-messages.constants";
import { ErrorHandler, FieldMessage } from "@core/Shared/Domain";
import { FirebaseError } from "firebase/app";

export class ErrorHandlerAuthFirebaseAdapter implements ErrorHandler<"password" | "email"> {
  handle(error: Error): FieldMessage<"password" | "email"> | null {
    if (!(error instanceof FirebaseError)) return null;

    switch (error.code) {
      case FIREBASE_INVALID_PASSWORD:
      case FIREBASE_INVALID_EMAIL:
      case FIREBASE_INVALID_LOGIN_CREDENTIALS:
        return { field: "root", message: MESSAGE_INVALID_LOGIN_CREDENTIALS };
      case FIREBASE_TOO_MANY_ATTEMPTS_TRY_LATER:
        return { field: "root", message: MESSAGE_TOO_MANY_ATTEMPTS_TRY_LATER };
      case FIREBASE_WEAK_PASSWORD:
        return { field: "password", message: MESSAGE_WEAK_PASSWORD };
      case FIREBASE_EMAIL_EXISTS:
        return { field: "email", message: MESSAGE_EMAIL_EXISTS };
      default:
        return null;
    }
  }
}
