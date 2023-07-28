import {createSlice} from "@reduxjs/toolkit";
import {postInquiry} from "./inquiryApi";


const initialState = {
    status:'idle',
}

const inquirySlice = createSlice({
    name: "inquiry",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postInquiry.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(postInquiry.fulfilled, (state, action) => {
            state.status = 'succeeded';
        });
        builder.addCase(postInquiry.rejected, (state, action) => {
            state.status = 'failed';
        });
    },
});

export default inquirySlice.reducer;