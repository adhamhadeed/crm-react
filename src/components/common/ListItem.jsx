import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item, onClick, isSelected }) => {
  const { icon, label } = item;

  return (
    <div
      className={isSelected ? "list-item selected" : "list-item"}
      onClick={(e) => onClick(item)}
    >
      <i className={icon}></i>
      <span>{label}</span>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
ListItem.defaultProps = {
  item: {},
  isSelected: false,
};
export default ListItem;
