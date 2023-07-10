import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('data/fetchData',async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(apiUrl + '/api/inquiry');
    return response.data;
});