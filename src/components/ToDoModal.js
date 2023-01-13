import React from "react";
import { useState } from "react";
import Button from "./Button";
import { MdOutlineClose } from "react-icons/md";
import "../styles/ToDoModal.css";

function ToDoModal({ isOpen, onClose }) {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('incomplete');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log({task, status})
        onClose();
    }

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="content">
            <div className="closeButton" 
            onClick={onClose}
            role="button">
              <MdOutlineClose/>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className='form-title'>Add Task</h1>
              <label htmlFor="title">
                Task
              </label>
              <input type="text" id='title' onChange={(e) => setTask(e.target.value)}/>
              <label htmlFor="status">
                Status
              </label>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
            </select>
            <div className="footer">
                <Button type="primary" action="submit">Add Task</Button>
                <Button type="secondary" onClick={onClose}>Cancel</Button>
            </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoModal;
