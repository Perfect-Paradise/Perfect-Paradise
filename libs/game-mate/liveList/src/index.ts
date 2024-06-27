import { ReduxLibrarySetting } from '@perfect-paradise/shared';
import { liveListApi } from './lib/state/apiSlice';
import { liveListReducer } from './lib/state/liveListSlice';

export const liveListFeatureSetting: ReduxLibrarySetting = {
  reducers: {
    liveList: liveListReducer,
    [liveListApi.reducerPath]: liveListApi.reducer,
  },
  middlewares: {
    [liveListApi.reducerPath]: liveListApi.middleware,
  }
}

export * from './lib/components/liveList';