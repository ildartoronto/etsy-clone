import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  band: 0,
  ring: 0,
  stone: 0,
};

const filterItemsSlice = createSlice({
  name: "filterItems",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      // console.log("value=", action.payload);
      state[action.payload.filter] = parseInt(action.payload.value);
    },
    resetFilters: (state) => {
      state.band = 0;
      state.ring = 0;
      state.stone = 0;
    },
  },
});

export const { setFilter, resetFilters } = filterItemsSlice.actions;
export default filterItemsSlice;
