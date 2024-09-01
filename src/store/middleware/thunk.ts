import { compose, MiddlewareAPI } from "redux";

export const composeEnhancer =
  // @ts-expect-error window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ don't exists in window
  (!import.meta.env.PROD && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? compose;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const thunkMiddleware = (store: MiddlewareAPI) => (next: (action: unknown) => void) => (action: unknown) => {
  if (typeof action === "function") {
    action(/* dispatch */);
  }
};
