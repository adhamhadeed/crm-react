import React from "react";

const Box = ({ id, icon }) => {
  return (
    <div className="box">
      <div>
        <i className={icon}></i>
      </div>
      <div className="box-info">abc</div>
    </div>
  );
};

export default Box;
