import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../slice/toDoSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";
import "../styles/ToDoItem.css";

function ToDoItem({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("delete");
    dispatch(deleteToDo(item.id));
  };

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
        <Button type="icon" onClick={handleDelete}>
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
