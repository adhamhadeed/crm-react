import React from "react";
import { useGlobalContext } from "../../../context/SideNavContext";
import ListItem from "./../ListItem";

const SideNavList = ({ items, onClick }) => {
  const { navSelectedItemId } = useGlobalContext();
  return (
    <div className="side-nav-list">
      {items &&
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={onClick}
            isSelected={navSelectedItemId === item.id}
          />
        ))}
    </div>
  );
};

export default SideNavList;
