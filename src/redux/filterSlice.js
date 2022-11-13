import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;