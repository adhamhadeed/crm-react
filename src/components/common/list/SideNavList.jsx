import React from "react";
import { useGlobalContext } from "../../../context/SideNavContext";
import PropTypes from "prop-types";
import ListItem from "./../ListItem";

const SideNavList = ({ item, onClick, navKey }) => {
  const { navSelectedItemId, sliderSelectedItemId } = useGlobalContext();

  const getProperty = (item) => {
    if (navKey === "_nav") return navSelectedItemId;
    return sliderSelectedItemId;
  };
  return (
    <div className="side-nav-list">
      <ListItem
        key={item.id}
        item={item}
        onClick={onClick}
        isSelected={getProperty(item) === item.id}
      />
    </div>
  );
};
SideNavList.propTypes = {
  navKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

SideNavList.defaultProps = {
  navKey: "_nav",
};
export default SideNavList;
