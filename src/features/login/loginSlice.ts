import {createSlice} from "@reduxjs/toolkit";

interface LoginState {
    username: string;
    password: string;
}

const loginSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: "",
    } as LoginState,
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});

export const { setUsername, setPassword } = loginSlice.actions;
export default loginSlice.reducer;