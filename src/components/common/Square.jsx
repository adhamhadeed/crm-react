import React from "react";

const Square = ({ square, onSquareClick }) => {
  const { color, id, selected } = square;
  const getSelected = () => {
    return selected ? "selected" : "";
  };
  return (
    <i
      className={`fa fa-square ${getSelected()}`}
      id={id}
      style={{ color: color }}
      onClick={() => onSquareClick(square)}
    ></i>
  );
};

export default Square;
