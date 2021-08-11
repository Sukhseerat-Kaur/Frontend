const initialState = { username: "", email: "" };

function copyReducer(state = initialState, action) {
  if (action.type === "COPY_USERNAME")
    return { ...state, username: action.payload };
  if (action.type === "COPY_EMAIL") return { ...state, email: action.payload };
  return state;
}

export default copyReducer;
