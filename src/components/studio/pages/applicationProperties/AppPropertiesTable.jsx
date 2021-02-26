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
      width: 60,
      name: "",

      formatter: (row) => (
        <div className="action-button">
          <i className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </div>
      ),
    },
  ];
  return (
    <div className="custom-table">
      <Table data={props.data} columns={columns} />
    </div>
  );
};

export default AppPropertiesTable;
