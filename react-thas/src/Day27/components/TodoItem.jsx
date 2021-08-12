import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import { toggleCompleted } from "../actions";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <div className="todo-list">
      {todoList.map((todoItem, index) => {
        return (
          <div className="todo-item" key={index}>
            {todoItem.completed ? (
              <div>
                <FaCheckCircle
                  size={18}
                  style={{ color: "blueviolet" }}
                  onClick={() => dispatch(toggleCompleted(index))}
                  className="pointer"
                />
              </div>
            ) : (
              <div>
                <BsCircle
                  size={18}
                  style={{ color: "blueviolet" }}
                  onClick={() => dispatch(toggleCompleted(index))}
                  className="pointer"
                />
              </div>
            )}
            <div
              style={{ display: "inline-block" }}
              className={todoItem.completed ? "completed" : "todo-text"}
            >
              {todoItem.text}
            </div>
            <button
              className="dlt-btn"
              onClick={() => dispatch(deleteTodo(index))}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
