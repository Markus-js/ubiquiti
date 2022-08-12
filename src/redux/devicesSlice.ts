import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    devices: [],
};

export const DeviceReducer = createSlice({
    name: "devices",
    initialState,
    reducers: {
        setDevices: (state, { payload }) => {
            state.devices = payload;
        },
    },
});

export const { setDevices } = DeviceReducer.actions;
export default DeviceReducer.reducer;
