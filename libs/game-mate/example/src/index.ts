import { ReduxLibrarySetting } from '@perfect-paradise/shared';
import { exampleApi } from './lib/state/apiSlice';
import { exampleReducer } from './lib/state/exampleSlice';

export const exampleFeatureSetting: ReduxLibrarySetting = {
  reducers: {
    example: exampleReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middlewares: {
    [exampleApi.reducerPath]: exampleApi.middleware,
  }
}

export * from './lib/components/example';
export * from './lib/components/champion';