interface ActionPayload<T extends string, P> {
  type: T;
  payload: P;
}
interface Action<T extends string> {
  type: T;
}
