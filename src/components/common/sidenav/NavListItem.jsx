import React from "react";

const NavListItem = ({ btn, onClick }) => {
  const { icon, label } = btn;

  return (
    <div className="side-nav-list-item" onClick={() => onClick(btn)}>
      <i className={icon}></i>
      <span>{label}</span>
    </div>
  );
};

export default NavListItem;
