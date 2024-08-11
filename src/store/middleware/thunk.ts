import { compose } from "redux";

export const composeEnhancer =
  (!import.meta.env.PROD && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? compose;
