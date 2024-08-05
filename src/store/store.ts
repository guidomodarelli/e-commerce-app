import { compose, legacy_createStore as createStore, applyMiddleware, Middleware, Reducer } from "redux";
import { rootReducer } from "./root-reducer";
import { customLogger } from "./middleware/logger";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { CartAction } from "./cart";
import { CategoryAction } from "./categories";
import { ProductAction } from "./products";

type Actions = ProductAction | CategoryAction | CartAction;

const persistConfig: PersistConfig<AppRootState> = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer<AppRootState, Actions>(
  persistConfig,
  rootReducer as unknown as Reducer<AppRootState, Actions>,
);

const middleWares = [import.meta.env.DEV && customLogger].filter(Boolean) as Middleware[];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export type AppRootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
