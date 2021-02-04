import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 8px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.danger ? "#dc3545" : props.warning ? "#ffc107" : "#4a8bc2"};
  border-color: ${(props) =>
    props.danger ? "#dc3545" : props.warning ? "#ffc107" : "#4a8bc2"};
  color: #fff;
  border: none;
  outline: none;
  margin-right: 5px;
  min-width: 40px;
  min-height: 35px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.transparentBgColor
        ? "none"
        : props.danger
        ? "#c82333"
        : props.warning
        ? "#e0a800"
        : "#3479b4"};
    box-shadow: 1px 1px 4px
      ${(props) =>
        props.danger ? "#bd2130" : props.warning ? "#d39e00" : "#0f4a7c"};
  }
  &:focus {
    outline: none !important;
  }
  &:disabled {
    pointer-events: none;
    background-color: #dbdbdb !important;
    color: #999;
    border: 1px solid #dbdbdb;
    box-shadow: none;
    font-weight: normal;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const Button = ({
  icon,
  label,
  onClick,
  transparentBgColor = false,
  displayAsIcon = false,
  ...rest
}) => {
  return (
    <StyledButton
      id="myStyledButton"
      name="myStyledButton"
      onClick={onClick}
      {...rest}
    >
      <i className={icon}></i> {!displayAsIcon && <span>{label}</span>}
    </StyledButton>
  );
};
StyledButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};
StyledButton.defaultProps = {
  label: "Click Me",
  cssClassName: "btn btn-primary",
};
export default Button;
