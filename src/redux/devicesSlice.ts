import { createSlice } from "@reduxjs/toolkit";
import {IDevice} from "../utils/interfaces";

type InitialState = {
    devices: IDevice[] | [],
    filterDevices: IDevice[] | [],
    persistentSearchTerm: string,
    persistentCheckedFilters: string[] | [],
    listView: boolean,
}

const initialState: InitialState = {
    devices: [],
    filterDevices: [],
    persistentSearchTerm: "",
    persistentCheckedFilters: [],
    listView: true,
};

export const DeviceReducer = createSlice({
    name: "devices",
    initialState,
    reducers: {
        setDevices: (state, { payload }) => {
            state.filterDevices = payload;
            state.devices = payload;
        },
        // Filter the devices based on the search term and the checked filters.
        filterDevices: (state, { payload }) => {
            /*
            Payload returns one of the two objects when called and removes the other.
            Both can´t exist at the same time => 
            Therefore they need to persist/be stored in state when data comes in or 
            revert to the initial state if payload is empty for the specific object.
             */
            const { searchTerm, checkedFilters } = payload;

            searchTerm === ""
                ? (state.persistentSearchTerm = "")
                : (state.persistentSearchTerm = searchTerm || state.persistentSearchTerm);

            state.persistentCheckedFilters = checkedFilters || state.persistentCheckedFilters || [];

            // If searchTerm & checkedFilters are empty, show all products.
            if (
                state.persistentSearchTerm.length === 0 &&
                state.persistentCheckedFilters.length === 0
            ) {
                state.filterDevices = state.devices;
            } else {
                state.filterDevices = state.devices.filter((device: {
                        product: { name: string };
                        line: { name: string };
                    }) => {
                        if (state.persistentCheckedFilters.length === 0) {
                            return getDataBySearchTerm(
                                device.product.name,
                                device.line.name,
                                state.persistentSearchTerm
                            );
                        }
                        return getDataBySearchTermAndCheckedFilters(
                            device.product.name,
                            device.line.name,
                            state.persistentSearchTerm,
                            state.persistentCheckedFilters
                        );
                    }
                );
            }
        },
        resetCheckedFilters: state => {
            state.persistentCheckedFilters = [];
        },
        resetDevice: state => {
            // filter widt Filters
            state.filterDevices = state.devices;
        },
        toggleViewType: (state, { payload }) => {
            state.listView = payload;
        },
    },
});

// filterDevices helpers
function getDataBySearchTermAndCheckedFilters(
    product: string,
    line: string,
    persistentSearchTerm: string,
    persistentCheckedFilters: string[]
) {
    return (
        (product.toLowerCase().includes(persistentSearchTerm.toLowerCase()) &&
            persistentCheckedFilters.includes(line)) ||
        (line.toLowerCase().includes(persistentSearchTerm.toLowerCase()) &&
            persistentCheckedFilters.includes(line))
    );
}

function getDataBySearchTerm(
    product: string,
    line: string,
    persistentSearchTerm: string
) {
    return (
        product.toLowerCase().includes(persistentSearchTerm.toLowerCase()) ||
        line.toLowerCase().includes(persistentSearchTerm.toLowerCase())
    );
}

export const {
    setDevices,
    filterDevices,
    resetDevice,
    toggleViewType,
    resetCheckedFilters,
} = DeviceReducer.actions;
export default DeviceReducer.reducer;
