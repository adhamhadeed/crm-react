import React from "react";

const PageHeader = ({ icon, header }) => {
  return (
    <div className="page-header">
      <i className={icon}></i>
      {header}
    </div>
  );
};

export default PageHeader;
