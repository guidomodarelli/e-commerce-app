type Action<T extends string, P = undefined> = {
  type: T;
} & (P extends undefined ? object : { payload: P });
