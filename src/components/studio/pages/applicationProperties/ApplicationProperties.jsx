import React, { useState, useContext } from "react";
import Loading from "../../../common/Loading";
import PageHeader from "./../../../common/PageHeader";
import AppProperitesTable from "./AppPropertiesTable";
import ApplicationProprtiesContext from "../../../../context/ApplicationProprtiesContext";

const ApplicationProperties = () => {
  const context = useContext(ApplicationProprtiesContext);
  const { data, isLoading } = context;

  const toolbarButtons = [
    {
      id: "add",
      label: "New Property",
      icon: "fa fa-plus",
      onClick: () => console.log("aaaaaaaa"),
    },
  ];
  return (
    <>
      <div className="page">
        <PageHeader
          icon="fa fa-snowflake-o"
          header="application properties"
          toolbarButtons={toolbarButtons}
        />
        {!isLoading ? (
          <div className="page-layout">
            <AppProperitesTable data={data} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ApplicationProperties;
