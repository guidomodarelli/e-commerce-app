import { StringValueObject } from "@core/Contexts/Shared/Domain/ValueObject/StringValueObject";

export class UserDisplayName extends StringValueObject {
  public static MIN_LENGTH = 3;
  public static MAX_LENGTH = 100;

  constructor(displayName: string) {
    super(displayName);
    this.ensureIsValidDisplayName(displayName);
  }

  private ensureIsValidDisplayName(displayName: string) {
    if (!UserDisplayName.isValid(displayName)) {
      throw new Error(UserDisplayName.invalidMessage(displayName));
    }
  }

  public static isValid(displayName: string): boolean {
    return displayName.length >= UserDisplayName.MIN_LENGTH && displayName.length <= UserDisplayName.MAX_LENGTH;
  }

  public static invalidMessage(displayName: string): string {
    return `The display name ${displayName} must be between ${UserDisplayName.MIN_LENGTH} and ${UserDisplayName.MAX_LENGTH} length limits.`;
  }
}
