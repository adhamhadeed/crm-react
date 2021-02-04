import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ data, columns, ...rest }) => {
  return <DataTable columns={columns} data={data} {...rest} />;
};

export default Table;
