function todoReducer(state = [], action) {
  if (action.type === "ADD_ITEM") return [...state, action.payload];
  if (action.type === "DELETE_ITEM")
    return state.filter((item, index) => index !== action.payload);
  if (action.type === "TOGGLE_COMPLETED") {
    const id = action.payload;
    const newArray = [...state];
    newArray[id].completed = newArray[id].completed ? false : true;
    return newArray;
  }
  return state;
}

export default todoReducer;
