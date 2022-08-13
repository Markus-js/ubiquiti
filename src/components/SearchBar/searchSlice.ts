import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
};

export const SearchReducer = createSlice({
    name: "searchTerm",
    initialState,
    reducers: {
        setSearchTerm: (state, { payload }) => {
            state.searchTerm = payload;
        },
    },
});

export const { setSearchTerm } = SearchReducer.actions;
export default SearchReducer.reducer;
