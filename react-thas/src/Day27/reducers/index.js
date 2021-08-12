import todoReducer from "./todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

export default rootReducer;
