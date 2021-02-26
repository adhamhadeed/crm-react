import React, { useEffect } from "react";
import useFetch from "../../../customHooks/useFetch";
import PageHeader from "./../../common/PageHeader";
import Loading from "./../../common/Loading";
import { getPageConfiguration } from "./../../../helper/PageConfiguration";

const PageTemplate = (props) => {
  const { pageKey, header, children, toolbarButtons } = props;
  const { apiURL, icon, name } = getPageConfiguration(pageKey);
  const [response, setResponse, isLoading, errors] = useFetch(
    apiURL,
    pageKey,
    []
  );

  if (errors) {
    return "Errro during fetching data...";
  }
  return (
    <>
      {!isLoading ? (
        <div className="page">
          <>
            <PageHeader
              icon={icon}
              header={name}
              toolbarButtons={toolbarButtons}
            />
            <div className="page-layout">
              {/* {React.Children.map(children, (child) =>
                React.cloneElement(child, response)
              )} */}

              {props.children(response)}
            </div>
          </>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PageTemplate;
