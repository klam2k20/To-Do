import "../styles/PageTitle.css";
import React from "react";

function PageTitle({ children, ...rest }) {
  return (
    <span className="title" {...rest}>
      {children}
    </span>
  );
}
export default PageTitle;
