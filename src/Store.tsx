import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice"
import jobReducer from "./Slices/JobSlice"
const configuration = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        jobs: jobReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true, // ✅ Enable thunk middleware
        }),
})

export type RootState = ReturnType<typeof configuration.getState>;
export type AppDispatch = typeof configuration.dispatch;
export default configuration;