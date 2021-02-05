import React from "react";

const Box = ({ icon, label }) => {
  return (
    <div className="box">
      <div className="box-icon">
        <i className={icon}></i>
      </div>
      <div className="box-info">
        <div>{label}</div>
        <div className="user-num">50</div>
      </div>
    </div>
  );
};

export default Box;
