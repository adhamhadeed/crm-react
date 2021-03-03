import React, { useContext } from "react";
import Loading from "../../../common/Loading";
import {
  TemplateHeader,
  TemplateContent,
} from "./../../../common/template/Index";
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
      <TemplateHeader
        icon="fa fa-snowflake-o"
        header="application properties"
        toolbarButtons={toolbarButtons}
      />
      {!isLoading ? (
        <TemplateContent>
          <AppProperitesTable data={data} />
        </TemplateContent>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ApplicationProperties;
