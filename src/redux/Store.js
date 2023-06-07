import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./slices/ApiSlice";
import { itemSlice } from "./slices/ItemSlice";
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
    [itemSlice.reducerPath]: itemSlice.reducer,
    currency: CurrencySlice,
    cart: CartSlice,
    modalWindow: ModalWindowSlice,
    productDetails: ProductDetailsSlice,
    sortItems: SortItemsSlice,
    filterItems: FilterItemsSlice,
    checkout: CheckoutSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(itemSlice.middleware),
});

setupListeners(store.dispatch);

export { useGetItemsQuery } from "./slices/ApiSlice";
export { useGetItemQuery } from "./slices/ItemSlice";

export default store;

// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware({
//   serializableCheck: false,
// })
