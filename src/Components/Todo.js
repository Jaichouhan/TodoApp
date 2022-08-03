import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([]);

  const addTodo = (input) => {
    const newTodo = [...msg, { input }];
    setMsg(newTodo);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  const removeTodo = (index) => {
    const removeItem = [...msg];
    removeItem.splice(index, 1);
    setMsg(removeItem);
  };

  const editTodo = (data, index) => {
    setInput(data.input);
    const removeItem = [...msg];
    removeItem.splice(index, 1);
    setMsg(removeItem);
  };

  return (
    <>
      <h1 className="todo_h1">Todo App</h1>
      <div className="todo_bg">
        <form onSubmit={submitTodo}>
          <input
            type="text"
            placeholder="type anything ...."
            className="todo_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="todo_i">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
      <div className="todo_div">
        {msg &&
          msg.map((data, index) => (
            <div className="todo_name" key={index}>
              <p>{data.input}</p>
              <div className="todo_icons">
                <i
                  className="fa fa-remove"
                  onClick={() => removeTodo(index)}
                ></i>
                <i
                  className="fa fa-edit"
                  onClick={() => editTodo(data, index)}
                ></i>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todo;
