import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoItem";
import "./StyleDay27.css";

const AppDay27 = () => {
  return (
    <div className="app-day-27">
      <div className="todo-list">
        <h1>TODO LIST</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default AppDay27;
