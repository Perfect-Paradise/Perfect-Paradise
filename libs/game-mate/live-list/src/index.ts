import { LibReducerBase } from '@perfect-paradise/shared';
import { liveListApi } from './lib/state/apiSlice';
import { liveListReducer } from './lib/state/liveListSlice';

export const liveListReducers: LibReducerBase = {
  apis: {
    [liveListApi.reducerPath]: liveListApi,
  },
  reducers: {
    liveList: liveListReducer
  }
}

export * from './lib/components/liveList';