import { combineReducers} from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import userReducer from "../features/user/userSlice";
import loginReducer from "../features/login/loginSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    user: userReducer,
    login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;