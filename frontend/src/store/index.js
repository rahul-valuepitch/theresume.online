import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
import resumeReducer from "./slices/resumeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    resume: resumeReducer,
  },
});

export default store;
