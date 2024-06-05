import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "", // 'success', 'error', 'info', etc.
  visible: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideAlert: (state) => {
      state.message = "";
      state.type = "";
      state.visible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
