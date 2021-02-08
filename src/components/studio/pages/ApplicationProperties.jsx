import React from "react";
import PageHeader from "./../../common/PageHeader";

const header = "Application Properties";
const ApplicationProperties = () => {
  return (
    <div className="page">
      <>
        <PageHeader icon="fa fa-snowflake-o" header={header} />
        <div className="page-layout"></div>
      </>
    </div>
  );
};

export default ApplicationProperties;
