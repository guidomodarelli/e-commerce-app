type Payload<T> = T extends undefined ? object : { payload: T };

interface ActionType<T extends string> {
  type: T;
}

type Action<T extends string, P = void> = ActionType<T> & Payload<P>;
