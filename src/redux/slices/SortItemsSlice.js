import { createSlice } from "@reduxjs/toolkit";

const sortItemsSlice = createSlice({
  name: "sortItems",
  initialState: {
    order: 1,
    type: 'number',
  },
  reducers: {
    setSorting: (state, action) => {
      state.order = state.order * -1; // descending or ascending, -1 or 1
      state.type = action.payload.type; // what is sorted: string or number
    },
  },
});

export const { setSorting } = sortItemsSlice.actions;
export default sortItemsSlice.reducer;
