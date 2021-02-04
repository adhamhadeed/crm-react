import React from "react";

const Box = ({ icon, info }) => {
  return (
    <div className="box">
      <div className="box-icon">
        <i className={icon}></i>
      </div>
      <div className="box-info">{info}</div>
    </div>
  );
};

export default Box;
