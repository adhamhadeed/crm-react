import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ items, isShown = true, onClick }) => {
  return (
    <div className="list-items" style={{ display: isShown ? "block" : "none" }}>
      {items.map((item) => (
        <ListItem key={Date.now() + item.id} item={item} onClick={onClick} />
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isShown: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

List.defaultProps = {
  items: [],
  isShown: true,
};
export default List;
