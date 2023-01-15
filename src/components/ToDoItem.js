import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-hot-toast";

import Button from "./Button";
import Checkbox from "./Checkbox";
import ToDoModal from "./ToDoModal";
import { deleteToDo, updateToDo } from "../slice/toDoSlice";
import "../styles/ToDoItem.css";

const toDoItemVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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

  const handleCheck = () => {
    dispatch(
      updateToDo({
        ...item,
        status: item.status === "complete" ? "incomplete" : "complete",
      })
    );
  };

  return (
    <>
      <motion.div className="toDoItemContainer" variants={toDoItemVariant}>
        <div className="toDoItemContent">
          <Checkbox
            check={item.status === "complete"}
            handleCheck={handleCheck}
          />
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
      </motion.div>
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
