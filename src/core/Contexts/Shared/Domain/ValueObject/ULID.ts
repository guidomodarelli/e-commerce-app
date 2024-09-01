import { InvalidArgumentError } from "./InvalidArgumentError";
import { StringValueObject } from "./StringValueObject";
import { ulid } from "ulid";
import { z } from "zod";

export class ULID extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsValidULID(value);
  }

  static random(): ULID {
    return new ULID(ulid());
  }

  isValid(id: string): boolean {
    return z.string().ulid().safeParse(id).success;
  }

  ensureIsValidULID(id: string) {
    if (!this.isValid(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}
