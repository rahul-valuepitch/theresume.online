import { createSlice } from "@reduxjs/toolkit";

// Initial Slice
const initialState = {
  isAuthenticated: false,
  user: {
    _id: "",
    email: "",
    fullName: "",
    phone: "",
    gender: "",
    birthDate: "",
    pronounce: "",
  },
  loading: false,
  error: null,
  token: null,
  tokenExpiration: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.loading = false;
      state.error = null;
    },

    // Logout
    logout: () => initialState,

    // Update Profile
    updateProfile: () => {},
  },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
