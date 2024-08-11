import { compose, MiddlewareAPI } from "redux";

export const composeEnhancer =
  (!import.meta.env.PROD && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? compose;

export const thunkMiddleware = (store: MiddlewareAPI) => (next: (action: unknown) => void) => (action: unknown) => {
  if (typeof action === "function") {
    action(/* dispatch */);
  }
};
