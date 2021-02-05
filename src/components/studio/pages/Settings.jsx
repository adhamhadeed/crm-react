import React from "react";
import PageHeader from "./../../common/PageHeader";

const header = "Settings";
const Settings = () => {
  return (
    <div className="page">
      <>
        <PageHeader icon="fa fa-cogs" header={header} />
        <div className="page-layout"></div>
      </>
    </div>
  );
};

export default Settings;
