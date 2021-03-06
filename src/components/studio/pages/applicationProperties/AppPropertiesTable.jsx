import React from "react";
import Table from "../../../common/Table";

const AppPropertiesTable = (props) => {
  const columns = [
    {
      key: "id",
      name: "Property",
      frozen: true,
    },
    {
      key: "desc",
      name: "Description",
      sortable: true,
    },
    {
      key: "defaultValue",
      name: "Default Value",
      formatter: (row) => <div>adham</div>,
    },
    {
      key: "value",
      name: "Value",
      formatter: (row) => <div>adham</div>,
    },
    {
      key: "type",
      name: "Type",
    },
    {
      key: "ida",
      name: "",
    },
    {
      key: "action",
      width: 100,
      name: "",

      formatter: (row) => (
        <div className="action-button">
          <i className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
          <i className="fa fa-times"></i>
          <i className="fa fa-undo"></i>
        </div>
      ),
    },
  ];
  return <Table data={props.data} columns={columns} />;
};

export default AppPropertiesTable;
