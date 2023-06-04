import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    isMobile: boolean;
}

const initialState: UserState = {
    isMobile: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsMobile(state, action: PayloadAction<boolean>) {
            state.isMobile = action.payload;
        }
    }
});

export const {setIsMobile} = userSlice.actions;
export default userSlice.reducer;