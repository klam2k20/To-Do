import React from "react";

import "../styles/PageTitle.css";

function PageTitle({ children, ...rest }) {
  return (
    <span className="title" {...rest}>
      {children}
    </span>
  );
}
export default PageTitle;
