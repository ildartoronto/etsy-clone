import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemApiSlice } from "./slices/ItemApiSlice";
import { itemsApiSlice } from "./slices/ItemsApiSlice";
import CurrencySlice from "./slices/CurrencySlice";
import CartSlice from "./slices/CartSlice";
import ModalWindowSlice from "./slices/ModalWindowSlice";
import ProductDetailsSlice from "./slices/ProductDetailsSlice";
import SortItemsSlice from "./slices/SortItemsSlice";
import FilterItemsSlice from "./slices/FilterItemsSlice";
import CheckoutSlice from "./slices/CheckoutSlice";

const store = configureStore({
  reducer: {
    [itemApiSlice.reducerPath]: itemApiSlice.reducer,
    [itemsApiSlice.reducerPath]: itemsApiSlice.reducer,
    [CurrencySlice.name]: CurrencySlice.reducer,
    [CartSlice.name]: CartSlice.reducer,
    [ModalWindowSlice.name]: ModalWindowSlice.reducer,
    [ProductDetailsSlice.name]: ProductDetailsSlice.reducer,
    [SortItemsSlice.name]: SortItemsSlice.reducer,
    [FilterItemsSlice.name]: FilterItemsSlice.reducer,
    [CheckoutSlice.name]: CheckoutSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(itemApiSlice.middleware)
      .concat(itemsApiSlice.middleware),
});

setupListeners(store.dispatch);

export { useGetItemQuery } from "./slices/ItemApiSlice";
export { useGetItemsQuery } from "./slices/ItemsApiSlice";
export default store;
