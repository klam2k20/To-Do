import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../slice/toDoSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-hot-toast";
import Button from "./Button";
import "../styles/ToDoItem.css";
import ToDoModal from "./ToDoModal";

function ToDoItem({ item }) {
  const dispatch = useDispatch();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteToDo(item.id));
    toast.success("Task Deleted!");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <div className="toDoItemContainer">
        <div className="toDoItemContent">
          <input type="checkbox" />
          <div className="toDoItemDetails">
            <span
              className={
                item.status === "incomplete" ? "task" : "completed task"
              }
            >
              {item.task}
            </span>
            <span className="time">{item.time}</span>
          </div>
        </div>
        <div className="toDoItemActions">
          <Button type="icon" onClick={handleDelete}>
            <MdDelete />
          </Button>
          <Button type="icon" onClick={handleUpdate}>
            <MdEdit />
          </Button>
        </div>
      </div>
      <ToDoModal
        type="update"
        toDo={item}
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
      />
    </>
  );
}

export default ToDoItem;
