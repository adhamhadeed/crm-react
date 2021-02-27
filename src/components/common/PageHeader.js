import React from "react";
import Toolbar from "./Toolbar";
import PropTypes from "prop-types";

const PageHeader = ({ icon, header, toolbarButtons }) => {
  console.log("pageheader render");
  return (
    <div className="page-header">
      <div className="page-title">
        <i className={icon}></i>
        <span className="page-name">{header}</span>
      </div>
      <div className="page-toolabr">
        <Toolbar buttons={toolbarButtons} />
      </div>
    </div>
  );
};
PageHeader.propTypes = {
  icon: PropTypes.string,
  toolbarButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
};
PageHeader.defaultProps = {
  toolbarButtons: [],
};
export default PageHeader;
