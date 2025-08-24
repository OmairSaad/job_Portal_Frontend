import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice"
import jobReducer from "./Slices/JobSlice"
import filterReducer from "./Slices/FilterSlice";
const configuration = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        jobs: jobReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true, // ✅ Enable thunk middleware
        }),
})

export type RootState = ReturnType<typeof configuration.getState>;
export type AppDispatch = typeof configuration.dispatch;
export default configuration;