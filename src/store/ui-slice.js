import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    drawerIsVisible: true,
  },
  reducers: {
    toggle: (state) => {
      state.drawerIsVisible = !state.drawerIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
