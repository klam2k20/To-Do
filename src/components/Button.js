import "../styles/Button.css";
import React from "react";

const styles = {
  primary: "btn primary",
  secondary: "btn secondary",
  select: "btn select",
};

function Button({ type, action='button', children, ...rest }) {
  return (
    <button className={styles[type]} type={action} {...rest}>
      {children}
    </button>
  );
}

function SelectButton({ type, children, ...rest }) {
  return (
    <select className={styles[type]} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
