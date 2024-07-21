interface UserParameter {
  id: string;
  email: string | null;
  displayName: string | null;
}

export class User {
  private _id: string;
  private _email: string;
  private _displayName: string;

  constructor(user: UserParameter) {
    this._id = user.id;
    this._email = user.email ?? "";
    this._displayName = user.displayName ?? "";
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get displayName(): string {
    return this._displayName;
  }

  public set displayName(value: string) {
    this._displayName = value;
  }
}
