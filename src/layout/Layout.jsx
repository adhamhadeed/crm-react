import React from "react";
import SideNav from "./../components/common/sidenav/SideNav";
const Layout = ({ children, cssClassName = "main-app" }) => {
  console.log("layout");
  return (
    <div className={cssClassName}>
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
