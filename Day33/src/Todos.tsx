import React from "react";
import { useState } from "react";

interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}
const Todos = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((item, index) => index !== id));
  };

  const toggleCompleted = (id: number): void => {
    const newList = [...todos];
    newList[id].completed = !newList[id].completed;
    console.log(newList);

    setTodos(newList);
  };
  return (
    <div className="todos">
      <div className="top">
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setTodos([
              ...todos,
              {
                id: todos.length,
                title: input,
                completed: false,
              },
            ]);
            setInput("");
          }}
        >
          ADD
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todoObj, index) => {
          return (
            <div key={index} className="todo-item">
              <button
                className="completed-btn"
                onClick={() => toggleCompleted(index)}
              >
                {todoObj.completed ? (
                  <span>Mark undone</span>
                ) : (
                  <span>Mark done</span>
                )}
              </button>
              <div className={todoObj.completed ? "title completed" : "title"}>
                {todoObj.title}
              </div>
              <button onClick={() => deleteTodo(index)} className="delete-btn">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
