import { FieldMessage } from "./FieldMessage";

export interface ErrorHandler<T extends string> {
  handle(error: Error): FieldMessage<T> | null;
}
