import React, { useState } from "react";
import ToDoInput from "./Components/ToDoInput";
import ToDo from "./Components/ToDo";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="main">
        <header className="header" id="header">
          <h1>To Do List</h1>
        </header>
        <div className="container" id="container">
          <ToDoInput
            todo={todos}
            setTodo={setTodos}
            setInput={setInput}
            input={input}
          />
          <ToDo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export default App;
