import React from "react";
import DataGrid from "react-data-grid";
import PropTypes from "prop-types";
import Styled from "styled-components";

const DataTable = Styled.div`
 height: 100%;
 
`;
const Table = ({ data, columns, ...rest }) => {
  return (
    <DataTable className="data-table">
      <DataGrid
        className="data-grid"
        {...rest}
        columns={columns}
        rows={data}
        rowGetter={(i) => data[i]}
        rowsCount={data.length}
      />
    </DataTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
