import React from "react";

import "../styles/Button.css";

const styles = {
  primary: "btn primary",
  secondary: "btn secondary",
  select: "btn select",
  icon: "icon",
};

function Button({ type, action = "button", children, ...rest }) {
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
