import React from "react";
import { useSelector } from "react-redux";
import "../styles/AppContent.css";
import ToDoItem from "./ToDoItem";

function AppContent() {
  const toDoList = useSelector((state) => state.toDo.toDoList);

  return (
    <div className="toDoList">
      {toDoList.map((toDoItem) => (
        <ToDoItem item={toDoItem} />
      ))}
    </div>
  );
}

export default AppContent;
