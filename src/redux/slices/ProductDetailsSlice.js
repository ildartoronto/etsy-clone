import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    item: null,
    listingsData: null,
  },
  reducers: {
    setProduct: (state, action) => {
      const { item, data } = action.payload;
      state.item = item;
      state.listingsData = data;
      // console.log("setProduct payload=", action.payload);
    },
  },
});

export const { setProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
