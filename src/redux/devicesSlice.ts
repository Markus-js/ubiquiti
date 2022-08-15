import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    devices: [],
    filterDevices: [],
    stateSearchTerm: "",
    stateCheckedCategories: [],
    displayOption: true,
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

            searchTerm === ""
                ? (state.stateSearchTerm = "")
                : (state.stateSearchTerm = searchTerm || state.stateSearchTerm);

            state.stateCheckedCategories =
                checkedCategories || state.stateCheckedCategories || [];

            const test = () => {
                return state.devices.filter((device: any) => {
                    return device.name
                        .toLowerCase()
                        .includes(state.stateSearchTerm.toLowerCase());
                });
            };
            if (
                state.stateSearchTerm.length === 0 &&
                state.stateCheckedCategories.length === 0
            ) {
                state.filterDevices = state.devices;
            } else {
                state.filterDevices = state.devices.filter(
                    (device: {
                        product: { name: string };
                        line: { name: string };
                    }) => {
                        if (state.stateCheckedCategories.length === 0) {
                            return (
                                device.product.name
                                    .toLowerCase()
                                    .includes(
                                        state.stateSearchTerm.toLowerCase()
                                    ) ||
                                device.line.name
                                    .toLowerCase()
                                    .includes(
                                        state.stateSearchTerm.toLowerCase()
                                    )
                            );
                        }
                        return (
                            (device.product.name
                                .toLowerCase()
                                .includes(
                                    state.stateSearchTerm.toLowerCase()
                                ) &&
                                state.stateCheckedCategories.includes(
                                    device.line.name
                                )) ||
                            (device.line.name
                                .toLowerCase()
                                .includes(
                                    state.stateSearchTerm.toLowerCase()
                                ) &&
                                state.stateCheckedCategories.includes(
                                    device.line.name
                                ))
                        );
                    }
                );
            }
        },
        resetDevice: state => {
            // filter widt categories
            state.filterDevices = state.devices;
        },
        displayOption: (state, { payload }) => {
            state.displayOption = payload;
        },
    },
});

export const { setDevices, filterDevices, resetDevice, displayOption } =
    DeviceReducer.actions;
export default DeviceReducer.reducer;
