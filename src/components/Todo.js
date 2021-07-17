import React, { useState } from "react";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Todo_Form from "./Todo_Form";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <Todo_Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="ed-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
