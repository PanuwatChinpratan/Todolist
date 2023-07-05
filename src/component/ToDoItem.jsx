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
            Save
          </button>
          <button className="button-group" onClick={cancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <button className="button-group" onClick={() => startEdit(index, todo.text)}>
            Edit
          </button>
          <button className="button-group" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
