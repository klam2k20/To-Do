import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import ToDoModal from "./ToDoModal";
import "../styles/AppHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../slice/toDoSlice";

function AppHeader() {
  const [isModalOpen, setModalOpen] = useState(false);
  const filter = useSelector((state) => state.toDo.filter);
  const dispatch = useDispatch();

  const updateFilterStatus = (e) => {
    const f = e.target.value;
    dispatch(updateFilter(f));
  };

  return (
    <div className="appHeader">
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        type="select"
        id="filter"
        value={filter}
        onChange={(e) => updateFilterStatus(e)}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default AppHeader;
