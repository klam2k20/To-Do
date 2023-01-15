import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "../styles/Checkbox.css";

const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: "var(--gray-2)",
    transition: { duration: 0.1 },
  },
};

const checkVariants = {
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

function Checkbox({ check, handleCheck }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className="checkbox"
      animate={check ? "checked" : "unchecked"}
      variants={boxVariants}
      onClick={handleCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
          animate={check ? "checked" : "unchecked"}
          variants={checkVariants}
          style={{ pathLength, opacity }}
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

export default Checkbox;
