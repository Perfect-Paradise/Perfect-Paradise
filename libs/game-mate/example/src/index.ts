import { LibReducerBase } from '@perfect-paradise/shared';
import { exampleApi } from './lib/state/apiSlice';
import { exampleReducer } from './lib/state/exampleSlice';

export const exampleReducers: LibReducerBase = {
  apis: {
    [exampleApi.reducerPath]: exampleApi,
  },
  reducers: {
    example: exampleReducer
  }
}

export * from './lib/components/example';
export * from './lib/components/champion';