import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAddToCart = {
        ...action.payload.item,
        nanoid: nanoid(),
        imageUrl: action.payload.imageUrl,
        ringSize: action.payload.ringSize,
      };      
      // console.log("...itemToAddToCart", itemToAddToCart);      
      state.cartItems.push(itemToAddToCart);
    },
    changeItemInCart: (state, action) => {
      const updatedItems = state.cartItems.map((item) => {
        if (
          item.listing_id === action.payload.item.listing_id &&
          item.nanoid === action.payload.item.nanoid
        ) {
          return { ...item, ringSize: action.payload.ringSize };
        } else {
          return item;
        }
      });
      state.cartItems = updatedItems;
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (i) =>
          i.listing_id === action.payload.listing_id &&
          i.nanoid === action.payload.nanoid
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  changeItemInCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// how to add item to cart in a component and group items by listing_id:
// const onAddItemToCart = (itemToAdd) => {
//   const itemIndex = cartItems.findIndex(
//     (i) => i.listing_id === itemToAdd.listing_id
//   );
//   // if the item is not in the Cart, add it.
//   if (itemIndex === -1) {
//     const itemWithAmount = { ...itemToAdd, amountItemsInCart: 1 };
//     setItemsInCart((prevItems) => [...prevItems, itemWithAmount]);
//     // if the item is already in the Cart, increase an amount by 1.
//   } else {
//     const updatedItems = [...cartItems];
//     updatedItems[itemIndex] = {
//       ...updatedItems[itemIndex],
//       amountItemsInCart: updatedItems[itemIndex].amountItemsInCart + 1,
//     };
//     setItemsInCart(updatedItems);
//   }
// };
