import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const updateTodoText = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(-1);
    setEditText("");
  };

  const startEdit = (index, indextext) => {
    setEditIndex(index);
    setEditText(indextext);
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditText("");
  };

  const saveEdit = (index) => {
    if (editText.trim() !== "") {
      updateTodoText(index, editText);
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button" type="submit">
            Add
          </button>
        </div>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            editIndex={editIndex}
            editText={editText}
            deleteTodo={deleteTodo}
            startEdit={startEdit}
            cancelEdit={cancelEdit}
            saveEdit={saveEdit}
            setEditText={setEditText}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
