import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isDisplayModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCloseModalFunc: (state) => {
      state.isDisplayModal = !state.isDisplayModal;
    },
  },
});

export const { openCloseModalFunc } = modalSlice.actions;

export default modalSlice.reducer;