import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const postInquiry = createAsyncThunk(
    'inquiry/postInquiry',
        async ({ email, inquiry }: { email: string, inquiry: string }) => {
            try{
                const response = await axios.post(
                    process.env.REACT_APP_API_URL + '/api/inquiry',{email, inquiry});
                return response.status;
            }catch (error : any){
                return error.response.status || 500;
            }
    });