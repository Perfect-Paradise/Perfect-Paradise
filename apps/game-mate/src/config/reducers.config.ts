import {
  exampleApi,
  exampleReducer,
} from '@perfect-paradise/game-mate/example';

export const reducers = {
  [exampleApi.reducerPath]: exampleApi.reducer,
  example: exampleReducer,
};

export const rootMiddleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(exampleApi.middleware);
