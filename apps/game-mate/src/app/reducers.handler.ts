import { Middleware } from "@reduxjs/toolkit";
import { libsReducers } from "../config/libs.config";

type ReducerMap = { [key: string]: any };

export const reducers: ReducerMap = libsReducers.reduce((acc, lib) => {
  const apis = lib.apis ? Object.entries(lib.apis).reduce((apiAcc, [reducerPath, api]) => {
    apiAcc[reducerPath] = api.reducer;
    return apiAcc;
  }, {} as ReducerMap) : {};
  
  return {
    ...acc,
    ...lib.reducers,
    ...apis,
  };
}, {} as ReducerMap);

export const rootMiddleware = (getDefaultMiddleware: () => Middleware[]) => 
  getDefaultMiddleware().concat(
    ...libsReducers.flatMap(lib => 
      lib.apis ? Object.values(lib.apis).map(api => api.middleware) : []
    )
  );