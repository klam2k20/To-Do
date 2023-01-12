import React from "react";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import "../styles/ToDoModal.css";

function ToDoModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modalWrapper">
          <div className="modalContainer">
            <Button className="close" onClick={onClose}>
              <MdOutlineClose />
            </Button>
            <form>
              <h1>Add Task</h1>
              <label htmlFor="title">
                Task
                <input type="text" />
              </label>
              <label htmlFor="status">
                Status
                <select id="status">
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoModal;
