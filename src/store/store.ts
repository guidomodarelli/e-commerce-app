import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [logger] as Middleware[];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type AppRootState = ReturnType<typeof store.getState>;
