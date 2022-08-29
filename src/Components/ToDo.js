import React from "react";
import Todo from "./Todo.jsx";

const ToDo = ({ todos, setTodos }) => {
  return (
    <div className="habits">
      <div className="btn-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              todos={todos}
              todo={todo}
              setTodo={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToDo;
