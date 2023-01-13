import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";
import "../styles/ToDoItem.css";

function ToDoItem({ item }) {
  return (
    <div className="toDoItemContainer">
      <div className="toDoItemContent">
        <input type="checkbox" />
        <div className="toDoItemDetails">
          <span className="task">{item.task}</span>
          <span className="time">{item.time}</span>
        </div>
      </div>
      <div className="toDoItemActions">
        <Button type="icon">
          <MdDelete />
        </Button>
        <Button type="icon">
          <MdEdit />
        </Button>
      </div>
    </div>
  );
}

export default ToDoItem;
