import { InvalidArgumentError } from "./InvalidArgumentError";
import { StringValueObject } from "./StringValueObject";
import { v4 as uuid } from "uuid";
import { z } from "zod";

export class UUID extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUUID(value);
  }

  static random(): UUID {
    return new UUID(uuid());
  }

  isValid(id: string): boolean {
    return z.string().uuid().safeParse(id).success;
  }

  ensureIsValidUUID(id: string) {
    if (!this.isValid(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}
