import { createSlice } from '@reduxjs/toolkit';
import {fetchData} from "./api";


interface ApiResponse {
    date: string;
    mail: string;
    inquiry: string;
}
interface MyDataState {
    data: ApiResponse[];
    isLoading: boolean;
}

const initialState: MyDataState = {
    data: [],
    isLoading: false,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;

        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});



export default dataSlice.reducer;
