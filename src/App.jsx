import React from "react";
import ToDoList from "./component/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">ToDo List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
