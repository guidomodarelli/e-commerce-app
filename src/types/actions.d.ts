interface Action<T extends string, P = undefined> {
  type: T;
  payload: P extends undefined ? undefined : P;
}
