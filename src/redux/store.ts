import { configureStore } from "@reduxjs/toolkit";
import DeviceReducer from "./devicesSlice";

export const store = configureStore({
    reducer: {
        devicesStore: DeviceReducer,
    },
});
