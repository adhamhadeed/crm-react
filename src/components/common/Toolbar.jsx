import React from "react";
import Button from "./../common/Button";
// import Button from "@material-ui/core/Button";
// import DeleteIcon from "@material-ui/icons/Delete";

const Toolbar = ({ buttons }) => {
  return (
    <div className="toolbar-header">
      {buttons &&
        buttons.map(({ id, icon, label, onClick, ...rest }) => (
          <Button
            key={id}
            name={id}
            icon={icon}
            label={label}
            onClick={onClick}
            {...rest}
          />
        ))}
    </div>
  );
};

export default Toolbar;
