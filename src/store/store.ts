import { Middleware, Reducer } from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import CreateSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./types";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

export type AppRootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<AppRootState> & {
  whitelist?: (keyof AppRootState)[];
  blacklist?: (keyof AppRootState)[];
};

const persistConfig: ExtendedPersistConfig = {
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

// export const composeEnhancer = ((!import.meta.env.PROD && composeWithDevTools) || compose) as typeof compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppRootState>();

export const persister = persistStore(store);
