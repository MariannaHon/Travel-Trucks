
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations";


const campersInitialState = {
    items: [],
    loading: false,
    error: null
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: "campers",
    initialState: campersInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(fetchCampersById.pending, handlePending)
            .addCase(fetchCampersById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;

                state.items = state.items.filter(
                    item => item.id = action.payload.id
                );
            })
            .addCase(fetchCampersById.rejected, handleRejected);
    },
});


export const campersReducer = campersSlice.reducer;