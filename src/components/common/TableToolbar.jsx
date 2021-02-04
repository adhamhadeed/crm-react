import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const TableToolbar = ({ buttons }) => {
  return (
    <div className="table-toolbar-header">
      {buttons.map(({ id, onClick, label, icon }) => (
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={onClick}
        >
          add user
        </Button>
      ))}
    </div>
  );
};

export default TableToolbar;
