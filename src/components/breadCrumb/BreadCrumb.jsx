import React, { useState } from "react";
import styled from "styled-components";
import Square from "./../common/Square";

const Crumb = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const BreadCrumb = (props) => {
  const [selectedId, setSelectedId] = useState(1);
  const squares = [
    { id: 1, color: "#4a8bc2" },
    { id: 2, color: "#6f42c1" },
    { id: 3, color: "#343a40" },
    { id: 4, color: "#fd7e14" },
  ];
  const onSquareSelect = (squareId) => {
    if (selectedId !== squareId) setSelectedId(squareId);
  };
  return (
    <Crumb className="bread-crumb">
      <div className="bread-crumb-path">
        <i className="fa fa-home"></i> Dashboard
      </div>
      <div className="bread-crumb-sqaure">
        {squares.map((square) => (
          <Square
            key={square.id}
            onSquareSelect={onSquareSelect}
            selectedId={selectedId}
            {...square}
          />
        ))}
      </div>
    </Crumb>
  );
};

export default BreadCrumb;
