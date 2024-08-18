import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Slices/authSlice";
import profileSlice from "./Slices/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice,
    }
})