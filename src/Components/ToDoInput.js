import React, { useState } from "react";
const ToDoInput = ({ setInput, input, todo, setTodo }) => {
  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };
  return (
    <>
      <form className="form" id="form">
        <p>Write what to do :</p>
        <input
          type="text"
          name="text"
          placeholder="here"
          onChange={inputTextHandler}
          value={input}
        />
        <button onClick={submitTodoHandler} className="btn-right" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
export default ToDoInput;
