import { combineReducers } from "redux";

import cityReducer from "./cityReducer";
import placedataReducer from "./placeDataReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  placeData: placedataReducer,
});

export default rootReducer;
