import { userDataType } from "../actions/index";

const initialState = {
  username: "",
  profilePicture: "",
};

export interface actionType {
  type: "UPDATE_USER";
  payload: userDataType;
}
const userReducer = (state: userDataType = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
