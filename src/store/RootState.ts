import { combineReducers} from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import userReducer from "../features/user/userSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;