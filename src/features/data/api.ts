import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('data/fetchData',async () => {
    const response = await axios.get('http://localhost:8080/api/test4');
    return response.data;
});

