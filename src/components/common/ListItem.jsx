import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  margin-bottom: 0.312em;
  transition: all 0.4s;
  padding: 0.5em;
  font-size: 0.45em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &.selected {
    background-color: #4a8bc2;
    color: #fff;
    border-radius: 0px;
  }
  &.selected:hover {
    background-color: #4a8bc2;
    color: #fff;
  }
  &:hover {
    background-color: #f8f8f8;
  }
  &:disabled {
    pointer-events: none;
    background-color: #dbdbdb;
    color: #999;
    box-shadow: none;
    font-weight: normal;
    opacity: 0.5;
    cursor: not-allowed;
  }
  & i {
    padding-right: 0.28rem;
  }
`;

const ListItem = ({ item, onClick, isSelected, ...rest }) => {
  const { icon, label } = item;

  const getSelectedClass = (isSelected) => {
    return isSelected ? "list-item selected" : "list-item";
  };

  return (
    <Wrapper
      className={getSelectedClass(isSelected)}
      onClick={(e) => onClick(item)}
      {...rest}
    >
      {icon && <i className={icon}></i>}
      <span>{label}</span>
    </Wrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

ListItem.defaultProps = {
  isSelected: false,
};
export default ListItem;
