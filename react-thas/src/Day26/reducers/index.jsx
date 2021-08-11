import copyReducer from "./Copy";

import { combineReducers } from "redux";
import { copyEmail, copyUsername } from "../actions";
const rootReducer = combineReducers({
  copyReducer: copyReducer,
});

export default rootReducer;
