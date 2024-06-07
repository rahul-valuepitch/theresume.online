import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    fullName: "",
    email: "",
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
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.error = null;
    },
    logout: () => {
      return initialState; // Reset state to initialState
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    resetState: () => initialState, // Action to reset the state to initial values
  },
});

export const {
  login,
  logout,
  setAuthError,
  setLoading,
  updateUserDetails,
  resetState,
} = authSlice.actions;

export default authSlice.reducer;
