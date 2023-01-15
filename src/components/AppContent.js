import React from "react";
import { useSelector } from "react-redux";
import "../styles/AppContent.css";
import ToDoItem from "./ToDoItem";

function AppContent() {
  const toDoList = useSelector((state) => state.toDo.toDoList);
  const filter = useSelector((state) => state.toDo.filter);

  const filterToDoList = toDoList.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  return (
    <div className="toDoList">
      {filterToDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
    </div>
  );
}

export default AppContent;
