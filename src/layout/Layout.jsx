import React from "react";
const Layout = ({ children, cssClassName = "main-app" }) => {
  return <div className={cssClassName}>{children}</div>;
};

export default Layout;
