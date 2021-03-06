import React, { useState, useContext } from "react";
import styled from "styled-components";
import Square from "./../common/Square";
import ThemesContext from "./../../context/ThemesContext";
import { getTheme, THEMES } from "../../themes";

const Crumb = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const BreadCrumb = (props) => {
  const { themeName, toggleTheme } = useContext(ThemesContext);
  const squares = [
    { id: 1, color: "#4a8bc2", theme: "BASIC" },
    { id: 2, color: "#6f42c1", theme: "PURBLE" },
    { id: 3, color: "#343a40", theme: "DARK" },
    { id: 4, color: "#fd7e14", theme: "ORANGE" },
  ];
  const onSquareClick = ({ theme }) => {
    toggleTheme({ theme: getTheme(THEMES[theme]), themeName: theme });
  };
  return (
    <Crumb className="bread-crumb">
      <div className="bread-crumb-path">
        {/* <i className="fa fa-home"></i> Dashboard */}
      </div>
      <div className="bread-crumb-sqaure">
        {squares.map((square) => (
          <Square
            key={square.id}
            onSquareClick={onSquareClick}
            selected={square.theme === themeName}
            square={square}
          />
        ))}
      </div>
    </Crumb>
  );
};

export default BreadCrumb;
