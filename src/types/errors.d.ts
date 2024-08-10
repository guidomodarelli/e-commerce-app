interface FieldMessage<T extends string = string> {
  field: T | "root";
  message: string;
}
