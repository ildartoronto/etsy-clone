import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  contentName: null,
};

const setRect = (state, action) => {
  const { x, y, width, height } = action.payload;
  state.x = x;
  state.y = y;
  state.width = width;
  state.height = height;
};

const modalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    openModalWindow: (state, action) => {
      // console.log("setModalWindow=");
      state.isOpen = true;
      setRect(state, action);
      state.contentName = action.payload.contentName;
    },
    closeModalWindow: (state, action) => {
      // console.log("closeModalWindow=", x, y, width, height);
      state.isOpen = false;
      // setRect(state, action); TEMP
      // state.contentName = action.payload.contentName; TEMP
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
