import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;