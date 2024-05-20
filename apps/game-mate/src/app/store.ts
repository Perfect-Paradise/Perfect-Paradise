import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { reducers, rootMiddleware } from "./reducers.handler";

export const createAppStore = () => {
  const rootReducer = combineSlices(reducers);

  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => rootMiddleware(getDefaultMiddleware) as ReturnType<typeof getDefaultMiddleware>
  });
};
