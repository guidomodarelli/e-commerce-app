import { z } from "zod";
import { ValueObject } from "../ValueObject";

export class UserDisplayName extends ValueObject<string> {
  public static MIN_LENGTH = 3;
  public static MAX_LENGTH = 100;

  constructor(displayName: string) {
    super(displayName);
    if (!UserDisplayName.isValid(displayName)) {
      throw new Error(UserDisplayName.invalidMessage(displayName));
    }
  }

  public static isValid(displayName: string) {
    return z.number().min(UserDisplayName.MIN_LENGTH).max(UserDisplayName.MAX_LENGTH).safeParse(displayName).success;
  }

  public static invalidMessage(displayName: string) {
    return `The display name ${displayName} must be between ${UserDisplayName.MIN_LENGTH} and ${UserDisplayName.MAX_LENGTH} length limits.`;
  }
}
