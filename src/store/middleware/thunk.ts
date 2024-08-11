import { compose, MiddlewareAPI } from "redux";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const composeEnhancer =
  // @ts-expect-error window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ don't exists in window
  (!import.meta.env.PROD && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? compose;

export const thunkMiddleware = (store: MiddlewareAPI) => (next: (action: unknown) => void) => (action: unknown) => {
  if (typeof action === "function") {
    action(/* dispatch */);
  }
};
