import React from "react";

const Square = ({ color, id, selectedId, onSquareSelect }) => {
  const getSelected = (id) => {
    return id === selectedId ? "selected" : "";
  };
  return (
    <i
      className={`fa fa-square ${getSelected(id)}`}
      id={id}
      style={{ color: color }}
      onClick={() => onSquareSelect(id)}
    ></i>
  );
};

export default Square;
