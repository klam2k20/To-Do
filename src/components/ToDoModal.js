import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { addToDo } from "../slice/toDoSlice";
import "../styles/ToDoModal.css";
import Button from "./Button";

function ToDoModal({ isOpen, onClose }) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        id: uuidv4(),
        task,
        status,
        time: new Date().toLocaleString(),
      })
    );
    onClose();
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
              <h1 className="form-title">Add Task</h1>
              <label htmlFor="title">Task</label>
              <input
                type="text"
                id="title"
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
                  Add Task
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
