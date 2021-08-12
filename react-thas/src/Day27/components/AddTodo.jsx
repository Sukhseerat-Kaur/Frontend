import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const todoList = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <div className="add-item">
      <input
        type="text"
        placeholder="Enter a todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          dispatch(
            addTodo({ text: todo, completed: false, id: todoList.length })
          );
          setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
