import { createSlice } from '@reduxjs/toolkit';
import {fetchData} from "./api";
import {dummyData} from "../../utils/dummyData";


interface ApiResponse {
    date: string;
    mail: string;
    inquiry: string;
}
interface MyDataState {
    data: ApiResponse[];
    isLoading: boolean;
    status: number;
}

const initialState: MyDataState = {
    data: dummyData,
    isLoading: false,
    status: 0,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action   ) => {
            state.isLoading = true;
            state.status = 1;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload?.data || [];
            state.status = action.payload?.status || 0;
            state.isLoading = false;

        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.status = parseInt("401");

        });
    }
});



export default dataSlice.reducer;
