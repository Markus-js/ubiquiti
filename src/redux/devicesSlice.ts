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
            const { searchTerm, checkedCategories } = payload;

            if (searchTerm.length === 0) {
                state.filterDevices = state.devices;
            } else {
                state.filterDevices = state.devices.filter(
                    (device: {
                        checkedCategories: any;
                        product: { name: string };
                        line: { name: string };
                    }) => {
                        if (checkedCategories.length === 0) {
                            return (
                                device.product.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                device.line.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            );
                        }
                        return (
                            (device.product.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) &&
                                checkedCategories.includes(device.line.name)) ||
                            (device.line.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) &&
                                checkedCategories.includes(device.line.name))
                        );
                    }
                );
            }
        },
        resetDevice: state => {
            // filter widt categories
            state.filterDevices = state.devices;
        },
    },
});

export const { setDevices, filterDevices, resetDevice } = DeviceReducer.actions;
export default DeviceReducer.reducer;
