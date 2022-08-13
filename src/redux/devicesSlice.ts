import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    devices: [],
    filterDevices: [],
};

export const DeviceReducer = createSlice({
    name: "devices",
    initialState,
    reducers: {
        setDevices: (state, { payload }) => {
            state.filterDevices = payload;
            state.devices = payload;
        },
        filterDevices: (state, { payload }) => {
            console.log(payload);
            if (payload.length === 0) {
                state.filterDevices = state.devices;
            } else {
                state.filterDevices = state.devices.filter(
                    (device: {
                        product: { name: string };
                        line: { name: string };
                    }) => {
                        return (
                            device.product.name
                                .toLowerCase()
                                .includes(payload.toLowerCase()) ||
                            device.line.name.includes(payload)
                        );
                    }
                );
            }
        },
        resetDevice: state => {
            state.filterDevices = state.devices;
        },
    },
});

export const { setDevices, filterDevices, resetDevice } = DeviceReducer.actions;
export default DeviceReducer.reducer;
