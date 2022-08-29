import React from "react";
const Todo = ({ text, todo, todos, setTodo }) => {
  const deleteHandler = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <li className="todo-item">
        My To Do : {text} {`${todo.completed ? "✔ Done" : ""}`}
      </li>
      <button onClick={completeHandler} className="btn">
        {`${todo.completed ? "Not Done" : "Done"}`}
      </button>
      <button onClick={deleteHandler} className="btn">
        Delete
      </button>
    </>
  );
};
export default Todo;
