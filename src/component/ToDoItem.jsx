import React from "react";

function ToDoItem({
  todo,
  index,
  editIndex,
  editText,
  deleteTodo,
  startEdit,
  cancelEdit,
  saveEdit,
  setEditText,
}) {
  return (
    <li className="todo-item">
      {editIndex === index ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="button-group" onClick={() => saveEdit(index)}>
            SAVE
          </button>
          <button className="button-group" onClick={cancelEdit}>
            CANCEL
          </button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <button
            className="button-group"
            onClick={() => startEdit(index, todo.text)}
          >
            EDIT
          </button>
          <button className="button-group" onClick={() => deleteTodo(index)}>
            DEL
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
