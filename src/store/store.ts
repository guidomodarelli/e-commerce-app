import { compose, legacy_createStore as createStore, applyMiddleware, Middleware, Reducer } from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "@redux-devtools/extension";
import CreateSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./types";
import { logger } from "redux-logger";

const persistConfig: PersistConfig<AppRootState> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = CreateSagaMiddleware();

const persistedReducer = persistReducer<AppRootState, Actions>(
  persistConfig,
  rootReducer as unknown as Reducer<AppRootState, Actions>,
);

const middleWares = [!import.meta.env.PROD && logger, sagaMiddleware].filter(Boolean) as Middleware[];

export const composeEnhancer = ((!import.meta.env.PROD && composeWithDevTools) || compose) as typeof compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppRootState>();

export const persister = persistStore(store);
