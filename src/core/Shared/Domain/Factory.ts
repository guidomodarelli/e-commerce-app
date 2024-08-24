export interface Factory<T, R> {
  create(user: T): R;
}
