import { combineSlices, configureStore } from "@reduxjs/toolkit";

export const appStore = (reducers: any, rootMiddleware: any) => {
  const rootReducer = combineSlices(reducers);

  return configureStore({
      reducer: rootReducer,
      middleware: rootMiddleware
  });
};
