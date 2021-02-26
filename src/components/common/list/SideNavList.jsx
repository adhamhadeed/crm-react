import React from "react";
import { useGlobalContext } from "../../../context/SideNavContext";
import PropTypes from "prop-types";
import ListItem from "./../ListItem";

const SideNavList = ({ item, onClick, selectedItem }) => {
  const { navSelectedItemId, sliderSelectedItemId } = useGlobalContext();

  const getProperty = (item) => {
    if (selectedItem === "_nav") return navSelectedItemId;
    return sliderSelectedItemId;
  };
  return (
    <div className="side-nav-list">
      <ListItem
        key={item.id}
        item={item}
        onClick={onClick}
        isSelected={selectedItem === item.id}
      />
    </div>
  );
};
SideNavList.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

SideNavList.defaultProps = {
  listKey: "_nav",
};
export default SideNavList;
