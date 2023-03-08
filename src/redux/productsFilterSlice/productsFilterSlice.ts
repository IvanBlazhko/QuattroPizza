import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const productsFilter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    sort: '',
  },
  reducers: {
    filterValue: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    sortValue: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { filterValue, sortValue } = productsFilter.actions;
