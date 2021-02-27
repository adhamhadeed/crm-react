import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  padding: 5px 8px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.danger ? "#dc3545" : props.warning ? "#ffc107" : "#4a8bc2"};
  border-color: ${(props) =>
    props.danger ? "#dc3545" : props.warning ? "#ffc107" : "#4a8bc2"};
  color: ${(props) => (props.warning ? "#333333" : "#fff")};
  text-transform: uppercase;
  border: none;
  outline: none;
  min-width: 40px;
  min-height: 25px;
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
  transparentBgColor,
  displayAsIcon,
  ...rest
}) => {
  return (
    <Wrapper id="std-button" name="std-button" onClick={onClick} {...rest}>
      <i className={icon}></i> {!displayAsIcon && <span>{label}</span>}
    </Wrapper>
  );
};
Wrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  displayAsIcon: PropTypes.bool,
  transparentBgColor: PropTypes.bool,
};
Wrapper.defaultProps = {
  label: "",
  cssClassName: "btn btn-primary",
  displayAsIcon: false,
  transparentBgColor: false,
};
export default Button;
