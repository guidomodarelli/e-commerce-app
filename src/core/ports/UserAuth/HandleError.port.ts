export interface HandleError<T extends string> {
  handle(error: Error): FieldMessage<T> | null;
}
