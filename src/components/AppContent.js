import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "../styles/AppContent.css";
import ToDoItem from "./ToDoItem";

const toDoListVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};
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

function AppContent() {
  const toDoList = useSelector((state) => state.toDo.toDoList);
  const filter = useSelector((state) => state.toDo.filter);

  const filterToDoList = toDoList.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });

  return (
    <motion.div
      className="toDoList"
      initial="hidden"
      animate="visible"
      variants={toDoListVariant}
    >
      {filterToDoList.length > 0 ? (
        filterToDoList.map((toDoItem) => (
          <ToDoItem key={toDoItem.id} item={toDoItem} />
        ))
      ) : (
        <motion.span className="empty-list" variants={toDoItemVariant}>
          No Tasks
        </motion.span>
      )}
    </motion.div>
  );
}

export default AppContent;
