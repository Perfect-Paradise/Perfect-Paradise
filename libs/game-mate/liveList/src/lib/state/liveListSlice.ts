import { createSlice } from '@reduxjs/toolkit';
import { LiveItem } from './apiSlice';

interface LiveListState {
  items: LiveItem[];
}

const initialState: LiveListState = {
  items: [],
};

const liveListSlice = createSlice({
  name: 'liveList',
  initialState,
  reducers: {
    appendLiveItems: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
  selectors: {
    selectLiveItems: (state) => state.items
  },
});

export const { appendLiveItems } = liveListSlice.actions;
export const { selectLiveItems } = liveListSlice.selectors;
export const liveListReducer = liveListSlice.reducer;