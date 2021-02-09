import React from "react";
import Button from "./../common/Button";

const Toolbar = ({ buttons }) => {
  return (
    <div className="toolbar">
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
