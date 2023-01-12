import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import ToDoModal from "./ToDoModal";
import "../styles/AppHeader.css";

function AppHeader() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="appHeader">
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton type="select" id="filter">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default AppHeader;
