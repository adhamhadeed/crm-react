import React from "react";
import Button from "./controls/Button";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = Styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
  height: var(--slider-toolbar-height);
  position: relative;
 
`;

const Toolbar = ({ buttons }) => {
  return (
    <Wrapper className="toolbar">
      <div className="toolbar-body">
        {buttons &&
          buttons.map((button) => <Button key={button.id} {...button} />)}
      </div>
    </Wrapper>
  );
};

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Toolbar;
