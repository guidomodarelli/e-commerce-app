export class ValueObject<T> {
  constructor(private _value: T) {}

  public get value() {
    return this._value;
  }
}
