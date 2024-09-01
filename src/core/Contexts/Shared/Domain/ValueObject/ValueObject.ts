import { InvalidArgumentError } from "./InvalidArgumentError";

export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  private readonly VALUE_MUST_BE_DEFINED = "Value must be defined";

  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(this.VALUE_MUST_BE_DEFINED);
    }
  }

  equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
