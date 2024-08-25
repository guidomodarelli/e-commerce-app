import z from "zod";
import { ValueObject } from "../ValueObject";

export class UserEmail extends ValueObject<string> {
  constructor(email: string) {
    super(email);
    if (!UserEmail.isValid(email)) {
      throw new Error(UserEmail.invalidMessage(email));
    }
  }

  public static isValid(email: string): boolean {
    return z.string().email().safeParse(email).success;
  }

  public static invalidMessage(email: string): string {
    return `The email ${email} is not valid.`;
  }
}
