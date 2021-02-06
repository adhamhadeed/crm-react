import React from "react";

const PageHeader = ({ icon, header }) => {
  return (
    <div className="page-header">
      <i className={icon}></i>
      <span>{header}</span>
    </div>
  );
};

export default PageHeader;
