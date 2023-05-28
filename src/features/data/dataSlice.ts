import { createSlice } from '@reduxjs/toolkit';
import {fetchData} from "./api";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: {
            name:'',
            address:'',
        },
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;

        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export default dataSlice.reducer;
