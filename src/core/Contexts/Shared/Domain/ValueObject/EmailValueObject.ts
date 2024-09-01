import { z } from "zod";
import { StringValueObject } from "./StringValueObject";

export class EmailValueObject extends StringValueObject {
  constructor(email: string) {
    super(email);
    this.ensureIsValidEmail(email);
  }

  ensureIsValidEmail(email: string) {
    if (!EmailValueObject.isValid(email)) {
      throw new Error(EmailValueObject.invalidMessage(email));
    }
  }

  public static isValid(email: string): boolean {
    return z.string().email().safeParse(email).success;
  }

  public static invalidMessage(email: string): string {
    return `The email ${email} is not valid.`;
  }
}
