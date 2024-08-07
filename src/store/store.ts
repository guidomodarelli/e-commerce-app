import { compose, legacy_createStore as createStore, applyMiddleware, Middleware, Reducer } from "redux";
import { rootReducer } from "./root-reducer";
import { customLogger } from "./middleware/logger";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { CartAction } from "./cart";
import { CategoryAction } from "./categories";
import { ProductAction } from "./products";
import { composeWithDevTools } from "@redux-devtools/extension";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "./user";

type Actions = ProductAction | CategoryAction | CartAction | UserAction;

const persistConfig: PersistConfig<AppRootState> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer<AppRootState, Actions>(
  persistConfig,
  rootReducer as unknown as Reducer<AppRootState, Actions>,
);

const middleWares = [!import.meta.env.PROD && customLogger].filter(Boolean) as Middleware[];

export const composeEnhancer = ((!import.meta.env.PROD && composeWithDevTools) || compose) as typeof compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppRootState>();

export const persister = persistStore(store);
