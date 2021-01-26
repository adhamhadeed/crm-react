import React from "react";
import NavListItem from "./NavListItem";

const SideNavList = ({ items, onClick }) => {
  return (
    <div className="side-nav-list">
      {items.map((item) => (
        <NavListItem key={item.id} btn={item} onClick={onClick} />
      ))}
    </div>
  );
};

export default SideNavList;
