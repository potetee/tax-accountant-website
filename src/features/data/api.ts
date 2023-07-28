import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {fromByteArray} from "base64-js";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async ({ user, password }: { user: string, password: string }) => {
    function makeCredential(user:string, password: string) {
        const encoder = new TextEncoder();
        const data = encoder.encode(user + ":" + password);
        return fromByteArray(data);
    }

    const base64Credentials = makeCredential(user,password);
    const response = await axios.get(
        process.env.REACT_APP_API_URL + '/api/inquiry',
        {
            headers:
                {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${base64Credentials}`
                }
        });
    return {'data': response.data, 'status': response.status};

});