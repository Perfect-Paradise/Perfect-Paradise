import { Reducer, combineSlices, configureStore } from "@reduxjs/toolkit";
import { Middleware } from "@reduxjs/toolkit";
import { librarySettings } from "../config/libs.config";

type ReducerMap = { [key: string]: Reducer };

export const createAppStore = () => {
  const reducers: ReducerMap = librarySettings.reduce((acc, lib) => {
    return {
      ...acc,
      ...lib.reducers,
    };
  }, {} as ReducerMap);

  const rootMiddleware = (getDefaultMiddleware: () => Middleware[]) =>
    getDefaultMiddleware().concat(
      ...librarySettings.flatMap(lib =>
        lib.middlewares ? Object.values(lib.middlewares) : []
      )
    );

  const rootReducer = combineSlices(reducers);

  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => rootMiddleware(getDefaultMiddleware) as ReturnType<typeof getDefaultMiddleware>
  });
};
