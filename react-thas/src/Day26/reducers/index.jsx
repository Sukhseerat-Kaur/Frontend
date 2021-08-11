import copyReducer from "./Copy";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  copyReducer: copyReducer,
});

export default rootReducer;
