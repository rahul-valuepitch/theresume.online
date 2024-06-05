import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import resumeSlice from "./slices/resumeSlice";
import alertSlice from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertSlice,
    resume: resumeSlice,
  },
});

export default store;
