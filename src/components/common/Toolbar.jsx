import React from "react";
import Button from "./controls/Button";
import PropTypes from "prop-types";

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

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Toolbar;
