import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filterContent: ''
}

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        filterContact(state, action) {
            state.filterContent = action.payload
        },
    },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer
