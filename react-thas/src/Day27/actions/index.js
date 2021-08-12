function addTodo(item) {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
}

function deleteTodo(id) {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
}

function toggleCompleted(id) {
  return {
    type: "TOGGLE_COMPLETED",
    payload: id,
  };
}

export { addTodo, deleteTodo, toggleCompleted };
