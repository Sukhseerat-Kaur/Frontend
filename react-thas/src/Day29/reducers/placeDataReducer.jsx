const placedataReducer = (state = {}, action) => {
  if (action.type === "UPDATE_PLACE_DATA") return action.payload;
  return state;
};

export default placedataReducer;
