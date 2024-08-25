import z from "zod";
import { ValueObject } from "../ValueObject";

export class UserId extends ValueObject<string> {
  constructor(id: string) {
    super(id);
    if (!UserId.isValid(id)) {
      throw new Error(UserId.invalidMessage(id));
    }
  }

  public static isValid(id: string): boolean {
    return z.string().uuid().safeParse(id).success;
  }

  public static invalidMessage(id: string): string {
    return `The ID ${id} is not valid.`;
  }
}
