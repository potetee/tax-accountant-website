import { combineReducers} from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import userReducer from "../features/user/userSlice";
import loginReducer from "../features/login/loginSlice";
import inquiryReducer from "../features/inquiry/inquirySlice";

const rootReducer = combineReducers({
    data: dataReducer,
    user: userReducer,
    login: loginReducer,
    inquiry: inquiryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;