import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--app-body-alt-bg-color);
  width: 100%;
`;

const List = ({ showList, items, render }) => {
  return (
    <Wrapper className="list" style={{ display: showList ? "block" : "none" }}>
      {items.map((item) => render(item))}
    </Wrapper>
  );
};

List.propTypes = {
  showList: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func.isRequired,
};

List.defaultProps = {
  showList: true,
};
export default List;
