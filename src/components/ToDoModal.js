import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { addToDo, updateToDo } from "../slice/toDoSlice";
import "../styles/ToDoModal.css";
import Button from "./Button";

function ToDoModal({ type, toDo, isOpen, onClose }) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update") {
      setTask(toDo.task);
      setStatus(toDo.status);
    } else {
      setTask("");
      setStatus("incomplete");
    }
  }, [type, toDo, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      toast.error("Enter a Task");
      return;
    } else {
      if (type === "update") {
        if (toDo.task !== task || toDo.status !== status) {
          dispatch(
            updateToDo({
              ...toDo,
              task,
              status,
            })
          );
          toast.success("Task Updated!");
          onClose();
        } else {
          toast.error("No Changes Made");
        }
      } else {
        dispatch(
          addToDo({
            id: uuidv4(),
            task,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added!");
        onClose();
      }
    }
  };

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="content">
            <div className="closeButton" onClick={onClose} role="button">
              <MdOutlineClose />
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="form-title">
                {type === "update" ? "Update Task" : "Add Task"}
              </h1>
              <label htmlFor="title">Task</label>
              <input
                type="text"
                id="title"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
              <div className="footer">
                <Button type="primary" action="submit">
                  {type === "update" ? "Update Task" : "Add Task"}
                </Button>
                <Button type="secondary" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoModal;
