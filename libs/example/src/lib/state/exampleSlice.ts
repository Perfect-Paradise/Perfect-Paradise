import { createSlice } from '@reduxjs/toolkit';

interface exampleStatus {
  championId: number;
}

const initialState: exampleStatus = {
  championId: 0,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setChampionId: (state, action) => {
      state.championId = action.payload;
    },
  },
  selectors: {
    selectChampionId: (state) => state.championId,
  },
});

export const { setChampionId } = exampleSlice.actions;
export const { selectChampionId } = exampleSlice.selectors;

export const exampleReducer = exampleSlice.reducer;
