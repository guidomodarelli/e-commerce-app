type Payload<T> = T extends void ? object : { payload: T };

type ActionType<T extends string> = { type: T };

type Action<T extends string, P = void> = ActionType<T> & Payload<P>;
