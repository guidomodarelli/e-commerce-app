import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";
import { rootReducer } from "./root-reducer";
import { customLogger } from "./middlewares";

const middleWares = [customLogger] as Middleware[];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type AppRootState = ReturnType<typeof store.getState>;
