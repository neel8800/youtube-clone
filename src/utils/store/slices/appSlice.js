import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenuVisibility: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenuVisibility } = appSlice.actions;
export default appSlice.reducer;
