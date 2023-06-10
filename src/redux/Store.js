import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./slices/ApiSlice";
import CurrencySlice from "./slices/CurrencySlice";
import CartSlice from "./slices/CartSlice";
import ModalWindowSlice from "./slices/ModalWindowSlice";
import ProductDetailsSlice from "./slices/ProductDetailsSlice";
import SortItemsSlice from "./slices/SortItemsSlice";
import FilterItemsSlice from "./slices/FilterItemsSlice";
import CheckoutSlice from "./slices/CheckoutSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [CurrencySlice.name]: CurrencySlice.reducer,
    [CartSlice.name]: CartSlice.reducer,
    [ModalWindowSlice.name]: ModalWindowSlice.reducer,
    [ProductDetailsSlice.name]: ProductDetailsSlice.reducer,
    [SortItemsSlice.name]: SortItemsSlice.reducer,
    [FilterItemsSlice.name]: FilterItemsSlice.reducer,
    [CheckoutSlice.name]: CheckoutSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export { useGetItemQuery, useGetItemsQuery } from "./slices/ApiSlice";
export default store;
