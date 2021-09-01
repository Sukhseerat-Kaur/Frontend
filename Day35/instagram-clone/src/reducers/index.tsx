import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
