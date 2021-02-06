import React from "react";
import Toolbar from "./Toolbar";

const PageHeader = ({ icon, header, toolbarButtons = [] }) => {
  return (
    <div className="page-header">
      <div className="page-title">
        <i className={icon}></i>
        <span className="page-name">{header}</span>
      </div>
      <div className="page-action">
        {" "}
        <Toolbar buttons={toolbarButtons} />
      </div>
    </div>
  );
};

export default PageHeader;
