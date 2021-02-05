import React from "react";
import DataGrid from "react-data-grid";

const Table = ({ data, columns, ...rest }) => {
  return (
    <DataGrid
      {...rest}
      columns={columns}
      rows={data}
      rowGetter={(i) => data[i]}
      rowsCount={data.length}
    />
  );
};

export default Table;
