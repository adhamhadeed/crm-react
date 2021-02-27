import React from "react";
import Button from "./controls/Button";
import PropTypes from "prop-types";

const Toolbar = ({ buttons }) => {
  return (
    <div className="toolbar">
      {buttons &&
        buttons.map((button) => <Button key={button.id} {...button} />)}
    </div>
  );
};

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Toolbar;
